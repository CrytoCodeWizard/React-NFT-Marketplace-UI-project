import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface TimelineProps {
  status: string
}

export const Timeline: React.FC<TimelineProps> = (props) => {
  const { status } = props
  const classes = useStyles()

  return (
    <>
      <Box className={classes.timelineWrapper}>
        <Box className={classes.statusWrapper}>
          <Box className={classes.statusCirle}></Box>
          <Box className={classes.statusLine}></Box>
        </Box>
        <Box className={classes.cardWrapper}>
          <Box className={classes.cardHeadline}>
            <Typography variant='h6'>{status}</Typography>
          </Box>
          <Box className={classes.cardText}>
            <Typography>
              {
                'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
              }
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    timelineWrapper: {
      display: 'flex',
      gap: '20px',
      // only set a maxWidth if an image is given
      '& + $timelineWrapper $statusWrapper $statusLine': {
        top: '-30px'
      }
    },
    statusWrapper: {
      position: 'relative',
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: '20px'
    },
    statusCirle: {
      width: '20px',
      height: '20px',
      borderRadius: '20px',
      background: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
      top: '24px',
      zIndex: 1
    },
    statusLine: {
      width: '1px',
      position: 'absolute',
      left: '50%',
      top: '30px',
      bottom: '20px',
      transform: 'translateX(-50%)',
      background: '#ffffff'
    },
    cardWrapper: {
      padding: '20px',
      background: theme.palette.text.secondary,
      color: '#ffffff',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      marginBottom: '20px',
      // prettier-ignore
      clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
    },
    cardHeadline: {
      marginBottom: '20px'
    },
    cardText: {
      color: '#fff'
    }
  }
})
