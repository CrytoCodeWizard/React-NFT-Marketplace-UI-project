import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';
import cssProps from "../cssProps.json"

export default {
  title: 'Example/Footer',
  component: Footer,
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
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
    website: "iotabots.io",
    twitter: "https://twitter.com/iotabots",
    text: "*BEE* *BOB* *BOO*",
    variant: "body2"
}
