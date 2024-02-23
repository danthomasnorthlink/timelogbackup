import { App } from "@slack/bolt";
import { ModalView } from "../types/modalView";

export async function timelogCommand(app: App): Promise<void> {
  app.command("/timelog", async ({ ack, body, client }) => {
    try {
      await ack();

      const date = body.text ?? null;
      console.log("Received /timelog command with date:", date);

      await client.chat.postMessage({
        channel: body.user_id,
        text: `Timelog for ${date}`,
      });

      const result = await client.views.open({
        trigger_id: body.trigger_id,
        view: createModalView(date) as ModalView,
      });
      console.log("Modal opened successfully:", result);

      await client.chat.postMessage({
        channel: body.user_id,
        text: "Modal opened successfully!",
      });
    } catch (error) {
      console.error("Error handling /timelog command:", error);

      await client.chat.postMessage({
        channel: body.user_id,
        text: "An error occurred while processing your request. Please try again.",
      });
    }
  });

  function createModalView(selectedDate?: string): ModalView {
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
      { title: "project 1" },
      { title: "project 2" },
      { title: "project 3" },
      { title: "project 4" },
    ];

    const datepickerAccessory: {
      type: "datepicker";
      action_id: string;
      placeholder: { type: "plain_text"; text: string };
      initial_date?: string;
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
