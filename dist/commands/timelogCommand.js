"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timelogCommand = void 0;
function timelogCommand(app) {
    app.command("/timelog", ({ ack, body, client }) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            // Acknowledge the slash command
            yield ack();
            // Get the date from the command text
            const date = (_a = body.text) !== null && _a !== void 0 ? _a : null;
            console.log("Received /timelog command with date:", date);
            // Post a message in the channel
            yield client.chat.postMessage({
                channel: body.user_id,
                text: `Timelog for ${date}`,
            });
            // Open the modal
            const result = yield client.views.open({
                trigger_id: body.trigger_id,
                view: createModalView(date),
            });
            console.log("Modal opened successfully:", result);
            // Post a success message in the channel
            yield client.chat.postMessage({
                channel: body.user_id,
                text: "Modal opened successfully!",
            });
        }
        catch (error) {
            // Log any errors that occur during the command handling
            console.error("Error handling /timelog command:", error);
            // Post an error message in the channel
            yield client.chat.postMessage({
                channel: body.user_id,
                text: "An error occurred while processing your request. Please try again.",
            });
        }
    }));
    function createModalView(selectedDate) {
        const hoursOptions = Array.from({ length: 8 }, (_, i) => ({
            text: {
                type: "plain_text",
                text: `${i + 1}`,
            },
            value: `${i + 1}`,
        }));
        const projectArray = [
            { title: "project 1" },
            { title: "project 2" },
            { title: "project 3" },
            { title: "project 4" },
        ];
        const datepickerAccessory = selectedDate
            ? {
                type: "datepicker",
                action_id: "datepicker_action",
                initial_date: selectedDate,
                placeholder: {
                    type: "plain_text",
                    text: "Select a date",
                },
            }
            : {
                type: "datepicker",
                action_id: "datepicker_action",
                placeholder: {
                    type: "plain_text",
                    text: "Select a date",
                },
            };
        return {
            type: "modal",
            callback_id: "form_submission",
            title: {
                type: "plain_text",
                text: "Input Hours",
            },
            blocks: [
                {
                    type: "section",
                    block_id: "date_picker_block",
                    text: {
                        type: "mrkdwn",
                        text: "*Select Date:*",
                    },
                    accessory: datepickerAccessory,
                },
                {
                    type: "section",
                    block_id: "section_block",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: "*Select a Project:*",
                        },
                        {
                            type: "mrkdwn",
                            text: `${selectedDate ? selectedDate : "No date entered"}`,
                        },
                    ],
                },
                {
                    type: "divider",
                },
                {
                    type: "input",
                    block_id: "input_block",
                    label: {
                        type: "plain_text",
                        text: "Project",
                    },
                    element: {
                        type: "static_select",
                        action_id: "project_dropdown_action",
                        placeholder: {
                            type: "plain_text",
                            text: "Select a project",
                        },
                        options: projectArray.map((project) => ({
                            text: {
                                type: "plain_text",
                                text: `${project.title}`,
                            },
                            value: `${project.title}`,
                        })),
                    },
                },
                {
                    type: "divider",
                },
                {
                    type: "input",
                    block_id: "input_block2",
                    label: {
                        type: "plain_text",
                        text: "Hours",
                    },
                    element: {
                        type: "static_select",
                        action_id: "hours_dropdown_action",
                        placeholder: {
                            type: "plain_text",
                            text: "Select hours",
                        },
                        options: hoursOptions,
                    },
                },
                {
                    type: "divider",
                },
                {
                    type: "input",
                    block_id: "input_block3",
                    label: {
                        type: "plain_text",
                        text: "Project",
                    },
                    element: {
                        type: "static_select",
                        action_id: "project_dropdown_action",
                        placeholder: {
                            type: "plain_text",
                            text: "Select a project",
                        },
                        options: projectArray.map((project) => ({
                            text: {
                                type: "plain_text",
                                text: `${project.title}`,
                            },
                            value: `${project.title}`,
                        })),
                    },
                },
                {
                    type: "divider",
                },
                {
                    type: "input",
                    block_id: "input_block4",
                    label: {
                        type: "plain_text",
                        text: "Hours",
                    },
                    element: {
                        type: "static_select",
                        action_id: "hours_dropdown_action",
                        placeholder: {
                            type: "plain_text",
                            text: "Select hours",
                        },
                        options: hoursOptions,
                    },
                },
            ],
            submit: {
                type: "plain_text",
                text: "Submit",
            },
        };
    }
}
exports.timelogCommand = timelogCommand;
