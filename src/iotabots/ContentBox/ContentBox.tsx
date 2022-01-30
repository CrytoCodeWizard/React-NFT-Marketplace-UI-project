import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import { BotCard } from '../BotCard/BotCard'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface ContentBoxProps {
  headline: string
  text: string
  image: string | JSX.Element
  children?: string | JSX.Element[] | JSX.Element
}

export const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const { headline, text, image, children } = props
  const classes = useStyles()

  return (
    <>
      <Box className={classes.contentBoxWrapper}>
        <Box className={classes.header} />
        <Box className={classes.body}>
          {image && (
            <Box className={classes.imageWrapper}>
              <BotCard
                image={image}
                headline={''}
                text={''}
                maxWidth={'200px'}
                rounded={false}
              />
            </Box>
          )}
          <Box className={classes.contentWrapper}>
            <Box className={classes.contentHeadline}>
              <Typography variant='h4'>{headline}</Typography>
            </Box>
            {text && !children && (
              <Typography className={classes.contentText}>{text}</Typography>
            )}
            {children && !text && (
              <Box className={classes.contentElement}>{children}</Box>
            )}
          </Box>
        </Box>
        <Box className={classes.footer} />
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    contentBoxWrapper: {
      paddingTop: '20px',
      position: 'relative',
      '&:not(:last-child)': {
        marginBottom: theme.spacing(6)
      }
    },
    // use a top and bottom div for clipping, because of the overflow behavior
    header: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: '40px',
      marginTop: '-20px',
      // prettier-ignore
      clipPath: 'polygon(80px 0, 0 80px, 0 100%, 100% 100%, 100% 100%, 100% 0)'
    },
    footer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: '40px',
      position: 'relative',
      // prettier-ignore
      clipPath: 'polygon(0 0, 0 100%, calc(100% - 40px) 100%, 100% calc(100% - 40px), 100% 0)'
    },
    body: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    },
    contentWrapper: {
      [theme.breakpoints.up('md')]: {
        flexBasis: 'auto',
        flexGrow: 1,
        flexShrink: 1,
        order: 1
      }
    },
    contentElement: {
      padding: theme.spacing(6)
    },
    contentHeadline: {
      backgroundColor: theme.palette.primary.main,
      boxSizing: 'border-box',
      color: theme.palette.common.white,
      display: 'inline-flex',
      marginTop: '-20px',
      maxWidth: 'calc(100% - 20px)',
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      paddingTop: theme.spacing(4),
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        hyphens: 'auto',
        overflow: 'hidden',
        wordBreak: 'break-word',
        wordWrap: 'break-word'
      },
      // prettier-ignore
      clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
    },
    contentText: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(6),
      paddingBottom: 0
    },
    imageWrapper: {
      [theme.breakpoints.down('sm')]: {
        height: '60px',
        width: '60px',
        // add a lower left dropShadow on mobile to make it look like cropped
        filter: `drop-shadow(-6px 6px 0px rgba(0,0,0,0.5))`,
        '& + $contentWrapper $contentHeadline': {
          maxWidth: 'calc(100% - 40px)'
        }
      },
      [theme.breakpoints.only('sm')]: {
        // same height as a short headline
        height: '96px',
        width: '96px',
        // only set a maxWidth if an image is given
        '& + $contentWrapper $contentHeadline': {
          maxWidth: 'calc(100% - 115px)'
        }
      },
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
      },
      [theme.breakpoints.up('md')]: {
        flexGrow: 1,
        flexShrink: 1,
        maxWidth: '160px',
        order: 2,
        width: '100%'
      },
      '& > div': {
        width: '100%',
        [theme.breakpoints.up('md')]: {
          marginTop: '-40px'
        }
      },
      '& img': {
        [theme.breakpoints.down('sm')]: {
          // prettier-ignore
          clipPath: 'polygon(10px 0, 0 10px, 0 100%, calc(100% - 10px) 100%, 100% calc(100% - 10px), 100% 0)'
        },
        [theme.breakpoints.only('sm')]: {
          // prettier-ignore
          clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
        },
        [theme.breakpoints.up('md')]: {
          // minWidth: '200px',
          // prettier-ignore
          clipPath: 'polygon(40px 0, 0 40px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
        }
      }
    }
  }
})
