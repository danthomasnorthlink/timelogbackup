export interface SectionBlock {
  type: "section";
  block_id: string;
  text: { type: "mrkdwn"; text: string };
  accessory?:
    | {
        type: "datepicker";
        action_id: string;
        placeholder: { type: "plain_text"; text: string };
      }
    | undefined;
  fields?: { type: "mrkdwn"; text: string }[];
}
