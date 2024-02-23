"use strict";
// import { App } from "@slack/bolt";
// import { registerCommands } from "./commands/command";
// import dotenv from "dotenv";
// const config = dotenv.config();
// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN,
// });
// const client = app.client;
// app.view("form_submission", async ({ ack, body, view }) => {
//   await ack();
//   const userName = body.user.name;
//   const values = view.state.values;
//   console.log(
//     "values:",
//     values.input_block.project_dropdown_action.selected_option,
//     values
//   );
//   try {
//     await client.chat.postMessage({
//       channel: body.user.id,
//       text: `Thank you ${userName}, your hours have been logged.`,
//     });
//   } catch (error) {
//     console.error("Error sending message:", error);
//   }
// });
// registerCommands(app);
// (async () => {
//   await app.start(process.env.PORT || 3000);
//   console.log(`Bolt app is running on port ${process.env.PORT || 3000}`);
// })();
// console.log("server");
// import { VercelRequest, VercelResponse } from "@vercel/node";
// import { App } from "@slack/bolt";
// import dotenv from "dotenv";
// // Load environment variables from .env file
// dotenv.config();
// // Create an instance of the Slack Bolt app
// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN,
// });
// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   try {
//     // Check if it's a GET request
//     if (req.method === "GET") {
//       console.log("GET request received");
//       // You can do additional handling for GET requests here if needed
//     } else {
//       // Asynchronous operations, such as starting the app or handling events, go here
//       console.log("Running");
//       // Respond with a success message
//       res.status(200).send("OK");
//     }
//   } catch (error) {
//     // Handle errors and log them
//     console.error("Error in handler:", error);
//     // Respond with an error message
//     res.status(500).send("Internal Server Error");
//   }
// }
// // ``;
// import { VercelRequest, VercelResponse } from "@vercel/node";
// import { App } from "@slack/bolt";
// import dotenv from "dotenv";
// // Load environment variables from .env file
// dotenv.config();
// // Create an instance of the Slack Bolt app
// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN,
// });
// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   try {
//     console.log("Running");
//     res.status(200).send("OK DOK");
//   } catch (error) {
//     console.error("Error in handler:", error);
//     res.status(500).send("Internal Server Error");
//   }
// }
