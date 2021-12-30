import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import ConnectButton from './ConnectButton'

export default {
  title: 'web3/ConnectButton',
  component: ConnectButton,
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

const Template: Story = (args) => {
  return <ConnectButton {...args} />
}

export const Default = Template.bind({})
Default.args = {}
