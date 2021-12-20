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
          <Box className={classes.textWrapper}>
            <Box className={classes.textHeadline}>
              <Typography variant='h4'>{headline}</Typography>
            </Box>
            <Typography className={classes.textBody}>{text}</Typography>
          </Box>
          {image && (
            <Box className={classes.imageWrapper}>
              <Box component='img' src={image} className={classes.image} />
            </Box>
          )}
        </Box>
        <Box className={classes.clipFooter} />
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      paddingTop: '20px'
    },
    clipHeader: {
      backgroundColor: theme.palette.background.paper,
      height: '40px',
      marginTop: '-20px',
      // prettier-ignore
      clipPath: 'polygon(80px 0, 0 80px, 0 100%, 100% 100%, 100% 100%, 100% 0)'
    },
    clipFooter: {
      backgroundColor: theme.palette.background.paper,
      height: '80px',
      position: 'relative',
      zIndex: -1,
      // prettier-ignore
      clipPath: 'polygon(0 0, 0 100%, calc(100% - 80px) 100%, 100% calc(100% - 80px), 100% 0)'
    },
    contentWrapper: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      gap: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-between'
      }
    },
    textWrapper: {
      marginBottom: '-40px',
      [theme.breakpoints.down('sm')]: {
        paddingRight: theme.spacing(4)
      },
      [theme.breakpoints.up('sm')]: {
        flexGrow: 1,
        paddingRight: '120px'
      },
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(4)
      }
    },
    textHeadline: {
      backgroundColor: theme.palette.primary.main,
      boxSizing: 'border-box',
      color: theme.palette.common.white,
      display: 'inline-flex',
      marginTop: '-20px',
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
      position: 'absolute',
      top: 0,
      right: 0,
      [theme.breakpoints.down('sm')]: {
        filter: `drop-shadow(-6px 6px 0px ${theme.palette.background.paper})`
      },
      [theme.breakpoints.up('md')]: {
        flexGrow: 1,
        position: 'relative',
        top: 'auto',
        right: 'auto',
        marginBottom: '-40px'
      }
    },
    image: {
      maxWidth: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '60px',
        // prettier-ignore
        clipPath: 'polygon(10px 0, 0 10px, 0 100%, calc(100% - 10px) 100%, 100% calc(100% - 10px), 100% 0)'
      },
      [theme.breakpoints.up('sm')]: {
        width: '100px',
        // prettier-ignore
        clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '-40px',
        minWidth: '150px',
        width: 'auto',
        // prettier-ignore
        clipPath: 'polygon(40px 0, 0 40px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
      }
    }
  }
})
