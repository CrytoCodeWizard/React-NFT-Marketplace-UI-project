
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BackgroundVideo from './BackgroundVideo';

export default {
  title: 'Example/BackgroundVideo',
  component: BackgroundVideo,
} as ComponentMeta<typeof BackgroundVideo>;

const Template: ComponentStory<typeof BackgroundVideo> = (args) => <BackgroundVideo {...args} />;

export const Default = Template.bind({});


Default.args={
    videoSource:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    blur : 0,
    children:  <h1>Headline!</h1>
}
