import { VercelRequest, VercelResponse } from "@vercel/node";
import { App, View, ViewSubmitAction } from "@slack/bolt";
import dotenv from "dotenv";
import createModalView from "../src/commands/modalView";
import { homeBlocks } from "../src/types/homeView";
import createFirstName from "../src/functions/createFirstName";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  dotenv.config();

  const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
  });

  const client = app.client;

  try {
    const body = JSON.parse(req.body.payload) as ViewSubmitAction;
    try {
      await client.views.publish({
        user_id: body.user.id,
        view: {
          type: "home",
          blocks: homeBlocks,
        },
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
    if (body.type === "view_submission") {
      const userName = body.user.name;
      const extractedName = createFirstName(userName);
      const userID = body.user.id;
      // const values = body.view.state.values;
      const selectedProject =
        body.view.state.values.input_block.project_dropdown_action
          .selected_option?.value;
      const hoursWorked = Number(
        body.view.state.values.input_block2.hours_dropdown_action
          .selected_option?.value
      );

      const currentDay = new Date().toISOString().split("T")[0];

      const inputDate =
        body.view.state.values.date_picker_block.datepicker_action?.value;

      const returnData = {
        id: userID,
        project: selectedProject,
        hours: hoursWorked,
        date: inputDate,
        createdAt: currentDay,
      };
      console.log(returnData);
      try {
        await client.chat.postMessage({
          channel: body.user.id,
          text: `Thank you ${extractedName}, your ${hoursWorked} hours have been logged to ${selectedProject}.`,
        });
        // //this seems to be a bit random as to how many times it will fire at the moment not sure why
        console.log(hoursWorked, "hours worked");
        if (hoursWorked < 4) {
          // await client.views.open({
          //   trigger_id: body.trigger_id,
          //   view: createModalView() as View,
          // });
          console.log("less than 8");
          const url = process.env.API_URL;
          // await client.
          try {
            await fetch(url + "/timelog", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: inputDate, // Pass the inputDate directly
            });
          } catch (error) {
            console.error("Error making API call:", error);
          }
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
    res.status(204).send("");
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).send("Internal Server Error");
  }
}
