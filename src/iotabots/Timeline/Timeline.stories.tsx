import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { Timeline, TimelineProps } from './Timeline'
import { ContentBox } from '../ContentBox/ContentBox'

export default {
  title: 'iotabots/Timeline',
  component: Timeline,
  argTypes: {
    checked: {
      defaultValue: true,
      control: {
        type: 'select',
        options: [true, false]
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

const Template: Story<TimelineProps> = () => {
  return (
    <ContentBox headline={'Roadmap'} text={''} image={''}>
      <Timeline checked={false} title='Timeline Title 1'>
        This is the first text for the timeline entry.
      </Timeline>
      <Timeline checked={true} title='Timeline Title 2'>
        This is the second text for the timeline entry.
      </Timeline>
      <Timeline checked={true} title='Timeline Title 3'>
        This is the third text for the timeline entry.
      </Timeline>
    </ContentBox>
  )
}

export const Default = Template.bind({})
Default.args = {}
