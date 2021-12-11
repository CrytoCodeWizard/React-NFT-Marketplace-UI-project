
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutSection from './AboutSection';

export default {
  title: 'Example/AboutSection',
  component: AboutSection,
} as ComponentMeta<typeof AboutSection>;

const Template: ComponentStory<typeof AboutSection> = (args) => <AboutSection {...args} />;

export const Iotabots = Template.bind({});

Iotabots.args={
   sectionId: "about",
   headlineText: "IOTABOTS",
   subHeadline_1_Text: "*BEE* *BOB* *BOO*",
   textBlockText: "On the 2nd November 2021, the first 500 IOTABOTS were minted for free on the public IOTA Smart Contracts EVM Testnet. More drops soon!",
   subHeadline_2_Text: "*BEE* *BOB* *BOO*",
}
