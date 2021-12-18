import React from 'react'
import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

export function FormControl(props: MuiFormControlProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiFormControl
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiFormControl>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
