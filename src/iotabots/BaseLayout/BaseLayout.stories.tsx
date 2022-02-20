import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { BaseLayout, BaseLayoutProps } from './index'

export default {
  title: 'iotabots/BaseLayout',
  component: BaseLayout,
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

const Template: Story<BaseLayoutProps> = (args) => {
  return <BaseLayout {...args} />
}

export const Default = Template.bind({})
Default.args = {
  frame: true
}
