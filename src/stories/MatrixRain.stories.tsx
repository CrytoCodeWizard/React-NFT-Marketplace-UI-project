import { ComponentStory, ComponentMeta } from '@storybook/react';

import MatrixRain from './MatrixRain';
import cssProps from "../cssProps.json"

export default {
  title: 'Example/MatrixRain',
  component: MatrixRain,
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
} as ComponentMeta<typeof MatrixRain>;

const Template: ComponentStory<typeof MatrixRain> = (args) => <MatrixRain {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
    title: "WHAT IS AN IOTABOT?!",
    text: "An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.",
    variant: "body2"
}
