import React from 'react'
import { Icon as MuiIcon, IconProps } from '@mui/material'

export function Icon(props: IconProps): JSX.Element {
  const { children } = props
  return <MuiIcon {...props}>{children}</MuiIcon>
}
