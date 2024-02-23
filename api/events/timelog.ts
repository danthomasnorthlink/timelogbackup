import { VercelRequest, VercelResponse } from "@vercel/node";
import { App, View } from "@slack/bolt";
import dotenv from "dotenv";
import createModalView from "../../src/commands/modalView";

export default async function timeLogCommandHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  dotenv.config();

  const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
  });

  const client = app.client;

  try {
    const body = req.body;
    const currentDay = new Date().toISOString().split("T")[0];
    const date = body.text ? body.text : currentDay;
    console.log("Received /timelog command with date:", date);
    if (date > currentDay) {
      await client.chat.postMessage({
        channel: body.user_id,
        text: "Please input the present or a past date",
      });
      return;
    } else {
      await client.views.open({
        trigger_id: body.trigger_id,
        view: createModalView(date) as View,
      });

      await client.chat.postMessage({
        channel: body.user_id,
        text: "Modal opened successfully!",
      });

      console.log(body.user_id, "id");
      res.status(204).send("");
    }
    return;
  } catch (error) {
    console.error("Error in handler:", error);
    // res.status(500).send("Internal Server Error");
    await client.chat.postMessage({
      channel: req.body.user_id,
      text: `${error}`,
    });
  }
}
