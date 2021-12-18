import React from 'react'
import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

export function OutlinedInput(props: MuiOutlinedInputProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiOutlinedInput
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
