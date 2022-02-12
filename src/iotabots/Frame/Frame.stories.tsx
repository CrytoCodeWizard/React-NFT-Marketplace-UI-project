import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { Frame } from './index'

export default {
  title: 'iotabots/Frame',
  component: Frame,
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

const Template: Story<React.FC> = () => {
  return <Frame />
}

export const Default = Template.bind({})
Default.args = {}
