import React from 'react'
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function CircularProgress(props: MuiCircularProgressProps): JSX.Element {
  const classes = useStyles()
  return <MuiCircularProgress className={classes.root} {...props} />
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      '&.MuiCircularProgress-colorPrimary': {
        color: theme.palette.primary.main
      }
    }
  }
})
