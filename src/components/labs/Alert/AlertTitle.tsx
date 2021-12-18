import React from 'react'
import { AlertTitle as MuiAlertTitle } from '@mui/material'
import { AlertTitleProps as MuiAlertTitleProps } from '@mui/lab'

import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function AlertTitle(props: MuiAlertTitleProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAlertTitle
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
