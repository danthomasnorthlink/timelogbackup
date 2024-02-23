import { HeaderBlock } from "./headerBlock";
import { SectionBlock } from "./sectionBlock";

export type ModalView = {
  type: "modal";
  callback_id: string;
  title: {
    type: "plain_text";
    text: string;
  };
  blocks: Array<HeaderBlock | SectionBlock>;
  submit: {
    type: "plain_text";
    text: string;
  };
};
