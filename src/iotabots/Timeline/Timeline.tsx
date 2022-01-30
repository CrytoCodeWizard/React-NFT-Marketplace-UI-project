import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface TimelineProps {
  checked: boolean
  title: string
  children?: string | JSX.Element[] | JSX.Element
}

export const Timeline: React.FC<TimelineProps> = (props) => {
  const { checked, title, children } = props
  const classes = useStyles(props)

  if (checked) {
    console.log('checked')
  }

  return (
    <>
      <Box className={classes.timelineWrapper}>
        <Box className={classes.statusWrapper}>
          <Box className={classes.statusCircle}></Box>
          <Box className={classes.statusLine}></Box>
        </Box>
        <Box className={classes.cardWrapper}>
          <Box className={classes.cardHeadline}>
            <Typography variant='h6'>{title}</Typography>
          </Box>
          <Box className={classes.cardText}>
            {children && <Typography>{children}</Typography>}
          </Box>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles<Theme, TimelineProps>((theme: Theme) => {
  return {
    timelineWrapper: {
      display: 'flex',
      gap: '20px',
      // custom styling for looping elements
      '& + $timelineWrapper': {
        marginTop: '20px'
      },
      '& + $timelineWrapper:last-child $statusWrapper $statusLine': {
        bottom: 'calc(100% - 40px)'
      },
      '& + $timelineWrapper $statusWrapper $statusLine': {
        top: '-30px'
      }
    },
    statusWrapper: {
      flexBasis: '20px',
      minWidth: '20px',
      position: 'relative'
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    statusCircle: (props) => {
      return {
        borderColor: theme.palette.primary.main,
        borderRadius: '20px',
        borderStyle: 'solid',
        borderWidth: '3px',
        boxSizing: 'border-box',
        height: '20px',
        left: 0,
        position: 'absolute',
        top: '24px',
        width: '20px',
        zIndex: 1,
        background:
          props.checked === true
            ? theme.palette.primary.main
            : theme.palette.common.white
      }
    },
    statusLine: {
      background: theme.palette.background.border,
      bottom: '0',
      left: '50%',
      position: 'absolute',
      top: '30px',
      transform: 'translateX(-50%)',
      width: '1px'
    },
    cardWrapper: {
      background: 'rgba(0,0,0,0.5)',
      color: theme.palette.common.white,
      flexGrow: 1,
      padding: '20px',
      // prettier-ignore
      clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
    },
    cardHeadline: {
      marginBottom: '20px'
    },
    cardText: {
      color: theme.palette.common.white
    }
  }
})
