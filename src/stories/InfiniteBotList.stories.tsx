import { ComponentStory, ComponentMeta } from '@storybook/react';
import InfiniteBotList from './InfiniteBotList';

export default {
  title: 'Test/InfiniteBotList',
  component: InfiniteBotList,
} as ComponentMeta<typeof InfiniteBotList>;

const Template: ComponentStory<typeof InfiniteBotList> = (args) => <InfiniteBotList {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
  itemCount: 21,
}