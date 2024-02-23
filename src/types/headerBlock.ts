export type HeaderBlock =
  | {
      type: "section";
      block_id: string;
      text: {
        type: "mrkdwn";
        text: string;
      };
      accessory?: {
        type: "datepicker";
        action_id: string;
        placeholder: {
          type: "plain_text";
          text: string;
        };
        initial_date?: string;
      };
    }
  | {
      type: "divider";
    }
  | {
      type: "input";
      block_id: string;
      label: {
        type: "plain_text";
        text: string;
      };
      element: {
        type: "static_select";
        action_id: string;
        placeholder: {
          type: "plain_text";
          text: string;
        };
        options: Array<{
          text: {
            type: "plain_text";
            text: string;
          };
          value: string;
        }>;
      };
    }
  | {
      type: "section";
      block_id: string;
      fields?: { type: "mrkdwn"; text: string }[];
    };
