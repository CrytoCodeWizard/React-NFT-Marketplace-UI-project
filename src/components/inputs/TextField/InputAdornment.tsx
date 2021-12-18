import React from 'react'
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

export function InputAdornment(props: MuiInputAdornmentProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiInputAdornment
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiInputAdornment>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
