import React from 'react'
import {
  Hidden as MuiHidden,
  HiddenProps as MuiHiddenProps
} from '@mui/material'

export function Hidden(props: MuiHiddenProps): JSX.Element {
  return <MuiHidden {...props} />
}
