import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'
import { BotCard, BotCardProps } from './BotCard'
import { Box } from '@mui/material'

export default {
  title: 'iotabots/BotCard',
  component: BotCard,
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

const Template: Story<BotCardProps> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '30px'
      }}
    >
      <BotCard
        maxWidth={'300px'}
        rounded={true}
        headline={'New Bot'}
        text={'#175'}
        image={'http://assets.iotabots.io/175.png'}
      />
      <BotCard
        maxWidth={'140px'}
        rounded={true}
        headline={''}
        text={'#122'}
        image={'http://assets.iotabots.io/122.png'}
      />
      <BotCard
        maxWidth={'100px'}
        rounded={true}
        headline={''}
        text={''}
        image={'http://assets.iotabots.io/102.png'}
      />
      <BotCard
        maxWidth={'100px'}
        rounded={false}
        headline={''}
        text={''}
        image={'http://assets.iotabots.io/166.png'}
      />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {}
