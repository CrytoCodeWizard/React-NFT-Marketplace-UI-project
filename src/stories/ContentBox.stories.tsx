import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentBox from './ContentBox';
import cssProps from "../cssProps.json"

export default {
  title: 'Example/ContentBox',
  component: ContentBox,
  argTypes:{
      variant:{
          options: cssProps.variant,
          control: {type: "select"},
      },
      isPrimary:{
          options: cssProps.isPrimary,
          control: {type: "radio"},
        }
  },
} as ComponentMeta<typeof ContentBox>;

const Template: ComponentStory<typeof ContentBox> = (args) => <ContentBox {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
    title: "WHAT IS AN IOTABOT?!",
    text: "An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.",
    imageSource: "http://assets.iotabots.io/2.png",
    imageSize: 150
}
