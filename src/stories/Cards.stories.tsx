import { ComponentStory, ComponentMeta } from '@storybook/react';

import cssProps from "../cssProps.json"
import { Cards } from './Cards';

export default {
  title: 'Example/Cards',
  component: Cards,
  argTypes: {
    typographyVariant: { 
      options: cssProps.variant,
      control: {type:"select"}
    },
    typographyAlign: {
      options: cssProps.align,
      control: {type:"select"}
    }
  }
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
    imageSrc: "https://assets.iotabots.io/1.png",
    alt: "IOTABOTS",
    altImg: "https://assets.iotabots.io/1000.png",
    typographyAlign: "center",
    typographyComponent: "h3",
    typographyVariant: "h6",
    typographyText: "IOTABOT #1"
}