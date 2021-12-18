import React from 'react'
import { Alert as MuiAlert } from '@mui/material'
import { AlertProps as MuiAlertProps } from '@mui/lab'

import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Alert(props: MuiAlertProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAlert
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
