import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from '@mui/material'

export function Checkbox(props: MuiCheckboxProps): JSX.Element {
  return <MuiCheckbox {...props} />
}
