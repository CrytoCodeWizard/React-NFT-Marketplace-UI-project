import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MintButton } from './MintButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MintButton',
  component: MintButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MintButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MintButton> = (args) => <MintButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'MintButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'MintButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'MintButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'MintButton',
};
