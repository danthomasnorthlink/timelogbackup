"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
const timelogCommand_1 = require("./timelogCommand");
function registerCommands(app) {
    // app.command("/hello", async ({ command, ack, say }) => {
    //   await ack();
    //   await say(`Hello, <@${command.user_id}>`);
    // });
    // app.command("/add_hours", async ({ command, ack, say }) => {
    //   await ack();
    //   const hours = command.text;
    //   console.log(hours + "by" + command.user_id);
    //   await say(`${hours} hours logged by <@${command.user_id}>`);
    // });
    (0, timelogCommand_1.timelogCommand)(app);
}
exports.registerCommands = registerCommands;
