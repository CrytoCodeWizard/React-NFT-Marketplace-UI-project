import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { ContentBox, ContentBoxProps } from './ContentBox'

export default {
  title: 'iotabots/ContentBox',
  component: ContentBox,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

const Template: Story<ContentBoxProps> = (args) => {
  return <ContentBox {...args} />
}

export const Default = Template.bind({})
Default.args = {
  headline: 'What is an IOTABOT?!',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  image: 'http://assets.iotabots.io/1.png'
}
