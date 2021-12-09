import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingSection from './LandingSection';

export default {
  title: 'Example/LandingSection',
  component: LandingSection,
} as ComponentMeta<typeof LandingSection>;

const Template: ComponentStory<typeof LandingSection> = (args) => <LandingSection {...args} />;

export const Iotabots = Template.bind({});

Iotabots.args={
    videoSource:"https://iotabots.io/assets/TEASER.mp4",
    blur:0,  
    title: "IOTABOTS",
    onClick: () => console.log("Hello"),
    subText: "First PFP NFTs on IOTA",
    buttonText: "Let's go!",
}