import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardGrid from './CardGrid';

export default {
  title: 'Test/CardGrid',
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) => <CardGrid {...args} />;

export const Iotabots = Template.bind({});
Iotabots.args = {
  itemCount: 21,
}