import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DiscoverSection } from './DiscoverSection';
import cssProps from "../cssProps.json"

export default {
  title: 'Example/DiscoverSection',
  component: DiscoverSection,
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
} as ComponentMeta<typeof DiscoverSection>;

const Template: ComponentStory<typeof DiscoverSection> = (args) => <DiscoverSection {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
    NavLinkChild: <a href="/bots">DISCOVER ALL BOTS</a>
}
