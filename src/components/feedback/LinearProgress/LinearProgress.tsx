import React from 'react'
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function LinearProgress(props: MuiLinearProgressProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiLinearProgress
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
