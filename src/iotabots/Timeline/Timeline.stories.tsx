import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { Timeline, TimelineProps } from './Timeline'
import { ContentBox } from '../ContentBox/ContentBox'

export default {
  title: 'iotabots/Timeline',
  component: Timeline,
  argTypes: {
    status: {
      defaultValue: 'unchecked',
      control: {
        type: 'select',
        options: ['unchecked', 'checked']
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

const Template: Story<TimelineProps> = (args) => {
  return (
    <ContentBox headline={'Roadmap'} text={''} image={''}>
      <Timeline {...args} />
    </ContentBox>
  )
}

export const Default = Template.bind({})
Default.args = {}
