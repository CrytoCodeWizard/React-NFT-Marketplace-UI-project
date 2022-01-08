import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface BotCardProps {
  headline: string
  text: string
  maxWidth: string
  rounded: boolean
  image: string | JSX.Element
}

export const BotCard: React.FC<BotCardProps> = (props) => {
  const { headline, text, image } = props
  const classes = useStyles(props)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isString = (value: any): any => {
    return typeof value === 'string' || value instanceof String
  }

  return (
    <>
      <Box className={classes.botCardWrapper}>
        <Box className={classes.imageWrapper}>
          {isString(image) && (
            <Box className={'image'} component='img' src={String(image)} />
          )}
          {!isString(image) && image}
        </Box>
        {(headline || text) && (
          <Box className={classes.textWrapper}>
            {headline && <Typography variant='h4'>{headline}</Typography>}
            {text && <Typography>{text}</Typography>}
          </Box>
        )}
      </Box>
    </>
  )
}

const useStyles = makeStyles<Theme, BotCardProps>((theme: Theme) => {
  return {
    '@global': {
      //need add into global rules
      '@keyframes pulsate': {
        '0%': {
          transform: 'translate(-50%, -50%) scale(0.6)'
        },
        '10%': {
          transform: 'translate(-50%, -50%) scale(0.7)'
        },
        '20%': {
          transform: 'translate(-50%, -50%) scale(0.8)'
        },
        '30%': {
          transform: 'translate(-50%, -50%) scale(0.9)'
        },
        '40%': {
          transform: 'translate(-50%, -50%) scale(1)'
        },
        '50%': {
          transform: 'translate(-50%, -50%) scale(0.6)'
        },
        '100%': {
          transform: 'translate(-50%, -50%) scale(0.8)'
        }
      }
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    botCardWrapper: (props) => {
      return {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: props.maxWidth
      }
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    imageWrapper: (props) => {
      return {
        position: 'relative',
        '&::after': {
          animation: 'pulsate 1s infinite',
          background: theme.palette.text.secondary,
          borderRadius: '20px',
          content: '""',
          height: '20px',
          left: '50%',
          position: 'absolute',
          top: '50%',
          width: '20px',
          zIndex: '-1'
        },
        '& img': {
          display: 'block',
          maxWidth: '100%',
          background: 'transparent',
          borderRadius: props.rounded === true ? '4px 4px 0 0' : '0'
        },
        '&:first-child:last-child img': {
          borderRadius: props.rounded === true ? '4px' : '0'
        }
      }
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    textWrapper: (props) => {
      return {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        '&:last-child:not(:first-child)': {
          borderRadius: props.rounded === true ? '0 0 4px 4px' : '0'
        }
      }
    }
  }
})
