import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { Navigation, NavigationProps } from './index'
import { MENU, MOBILE_MENU } from './config'

export default {
  title: 'iotabots/Navigation',
  component: Navigation,
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

const Template: Story<NavigationProps> = (args) => {
  return <Navigation {...args} />
}

export const Default = Template.bind({})
Default.args = {
  identity: true,
  menu: MENU,
  mobileMenu: MOBILE_MENU
}
