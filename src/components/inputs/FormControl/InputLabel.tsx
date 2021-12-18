import React from 'react'
import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

export function InputLabel(props: MuiInputLabelProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiInputLabel
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiInputLabel>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
