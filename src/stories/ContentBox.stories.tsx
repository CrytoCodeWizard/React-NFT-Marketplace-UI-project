import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentBox } from './ContentBox';
import cssProps from "../cssProps.json"

export default {
  title: 'Example/ContentBox',
  component: ContentBox,
  argTypes:{
        backgroundColor:{control: "color"},
        headerBackgroundColor:{control: "color"},
        hasImage: {
          options: cssProps.isPrimary,
          control: "radio"}
  },
} as ComponentMeta<typeof ContentBox>;

const Template: ComponentStory<typeof ContentBox> = (args) => <ContentBox {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
    title: "WHAT IS AN IOTABOT?!",
    text: "An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.",
    hasImage: true,
    imageSource: "https://assets.iotabots.io/9.png",
    imageSize: 150,
    backgroundColor: "#2B2B2B",
    headerBackgroundColor: "#02c692",
    topBarHeight: "20px",
    topBarMarginLeft: "75px",
    textMarginBottom: "30px",
    textMarginRight: "10px",
    textMarginLeft: "10px",
    breakPoint: 620,
    edgeRightBottomSize: 50,
}
