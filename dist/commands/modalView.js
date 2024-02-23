"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModalView = void 0;
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
exports.createModalView = createModalView;
