import React from 'react'
import { Input as MuiInput, InputProps as MuiInputProps } from '@mui/material'

export function Input(props: MuiInputProps): JSX.Element {
  return <MuiInput {...props} />
}
