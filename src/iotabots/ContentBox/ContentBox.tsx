import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface ContentBoxProps {
  title: string
  text: string
  image: string
}

export const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const { title, text, image } = props
  const classes = useStyles()

  React.useEffect(() => {
    console.log('Peter Weinmann')
  }, [])

  return (
    <>
      <Box className={classes.root}>
        {image && <Box component='img' src={image} className={classes.image} />}
        <Box className={classes.titleBox}>
          <Typography variant='h4'>{title}</Typography>
        </Box>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: theme.radius.medium,
      // prettier-ignore
      clipPath: 'polygon(40px 0, 0 40px, 0 100%, calc(100% - 40px) 100%, 100% calc(100% - 40px), 100% 0)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    titleBox: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      boxSizing: 'border-box',
      // prettier-ignore
      clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)',
      position: 'relative',
      width: 'auto',
      padding: theme.spacing(4),
      marginLeft: '-20px',
      marginBottom: theme.spacing(4),
      borderRadius: theme.radius.medium
    },
    text: {
      color: theme.palette.text.secondary,
      width: 'calc(100% - 200px)'
    },
    image: {
      height: '90%',
      position: 'absolute',
      // prettier-ignore
      clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)',
      top: 0,
      right: 0
    }
  }
})
