import { ModalView } from "../types/modalView";

export default function createModalView(selectedDate?: string): ModalView {
  const hoursOptions: {
    text: { type: "plain_text"; text: string };
    value: string;
  }[] = Array.from({ length: 8 }, (_, i) => ({
    text: {
      type: "plain_text",
      text: `${i + 1}`,
    },
    value: `${i + 1}`,
  }));

  const projectArray = [
    { title: "HUSK" },
    { title: "Comapre Pal" },
    { title: "N-cypher" },
    { title: "Northstar" },
  ];

  const datepickerAccessory: {
    type: "datepicker";
    action_id: string;
    placeholder: { type: "plain_text"; text: string };
    initial_date?: string;
    optional?: false;
  } = selectedDate
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
    ],
    submit: {
      type: "plain_text",
      text: "Submit",
    },
  };
}
