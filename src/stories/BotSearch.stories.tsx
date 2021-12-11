import { ComponentStory, ComponentMeta } from '@storybook/react';

import cssProps from "../cssProps.json"
import { BotSearch } from './BotSearch';

export default {
  title: 'Iotabots/BotSearch',
  component: BotSearch,
  argTypes: {
    typographyVariant: {
      options: cssProps.variant,
      control: { type: "select" }
    },
    typographyAlign: {
      options: cssProps.align,
      control: { type: "select" }
    }
  }
} as ComponentMeta<typeof BotSearch>;

const Template: ComponentStory<typeof BotSearch> = (args) => <BotSearch {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
  placeholder: "Type in the # of your bot"
}