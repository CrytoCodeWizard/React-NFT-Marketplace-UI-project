import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface ContentBoxProps {
  headline: string
  text: string
  image: string
}

export const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const { headline, text, image } = props
  const classes = useStyles()

  React.useEffect(() => {
    console.log('Peter Weinmann')
  }, [])

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.clipHeader} />
        <Box className={classes.contentWrapper}>
          {image && (
            <Box className={classes.imageWrapper}>
              <Box component='img' src={image} className={classes.image} />
            </Box>
          )}
          <Box className={classes.textWrapper}>
            <Box className={classes.textHeadline}>
              <Typography variant='h4'>{headline}</Typography>
            </Box>
            <Typography className={classes.textBody}>{text}</Typography>
          </Box>
        </Box>
        <Box className={classes.clipFooter} />
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      paddingTop: '20px',
      position: 'relative'
    },
    // use a top and bottom div for clipping, because of the overflow behavior
    clipHeader: {
      backgroundColor: theme.palette.background.paper,
      height: '40px',
      marginTop: '-20px',
      // prettier-ignore
      clipPath: 'polygon(80px 0, 0 80px, 0 100%, 100% 100%, 100% 100%, 100% 0)'
    },
    clipFooter: {
      backgroundColor: theme.palette.background.paper,
      height: '40px',
      position: 'relative',
      // prettier-ignore
      clipPath: 'polygon(0 0, 0 100%, calc(100% - 40px) 100%, 100% calc(100% - 40px), 100% 0)'
    },
    contentWrapper: {
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    },
    textWrapper: {
      [theme.breakpoints.up('md')]: {
        flexBasis: 'auto',
        flexGrow: 1,
        flexShrink: 1,
        order: 1
      }
    },
    textHeadline: {
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
    textBody: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(6),
      paddingBottom: 0
    },
    imageWrapper: {
      [theme.breakpoints.down('sm')]: {
        // add a lower left dropShadow on mobile to make it look like cropped
        filter: `drop-shadow(-6px 6px 0px ${theme.palette.background.paper})`,
        '& + $textWrapper $textHeadline': {
          maxWidth: 'calc(100% - 40px)'
        }
      },
      [theme.breakpoints.only('sm')]: {
        // only set a maxWidth if an image is given
        '& + $textWrapper $textHeadline': {
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
        order: 2,
        flexBasis: 0,
        flexGrow: 0,
        flexShrink: 1
      }
    },
    image: {
      maxWidth: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '60px',
        // prettier-ignore
        clipPath: 'polygon(10px 0, 0 10px, 0 100%, calc(100% - 10px) 100%, 100% calc(100% - 10px), 100% 0)'
      },
      [theme.breakpoints.only('sm')]: {
        height: '96px', // same height as a short headline
        // prettier-ignore
        clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '-40px',
        minWidth: '200px',
        // prettier-ignore
        clipPath: 'polygon(40px 0, 0 40px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
      }
    }
  }
})
