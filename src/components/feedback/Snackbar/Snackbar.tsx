import React from 'react'
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Snackbar(props: MuiSnackbarProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiSnackbar
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
