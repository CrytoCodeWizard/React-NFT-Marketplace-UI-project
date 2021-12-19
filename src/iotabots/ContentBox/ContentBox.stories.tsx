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
  title: 'Headline',
  text: 'Some Text',
  image: 'Happy Programmers day'
}
