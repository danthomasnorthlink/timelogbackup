import { Block, KnownBlock } from "@slack/bolt";

const headerBlock = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "Timelog bot",
  },
};

const divider = {
  type: "divider",
};

const block1 = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "HUSK HPW\n Star Cargo, Husk Stock\n ",
  },
  accessory: {
    type: "image",
    image_url: "https://github.com/NorthLink-Digital/husk-hpw",
    alt_text: "alt text for image",
  },
};

const block2 = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "*ComparePAl*\n:star::star::star::star: 152 time entries\n Totaling 267 Hours\n https://github.com/NorthLink-Digital/ComparePAL",
  },
  accessory: {
    type: "image",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
    alt_text: "alt text for image",
  },
};

const actionButtons = {
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Hours logged",
        emoji: true,
      },
      value: "click_me_123",
    },
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Days missed",
        emoji: true,
      },
      value: "click_me_123",
      url: "https://google.com",
    },
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Hours by Project",
        emoji: true,
      },
      value: "click_me_123",
      url: "https://google.com",
    },
  ],
};

export const homeBlocks = [
  headerBlock,
  divider,
  block1,
  divider,
  block2,
  divider,
  actionButtons,
];
