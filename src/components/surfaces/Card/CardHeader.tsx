import React from 'react'
import MuiCardHeader, { CardHeaderProps } from '@mui/material/CardHeader'

export function CardHeader(props: CardHeaderProps): JSX.Element {
  const { children } = props
  return <MuiCardHeader {...props}>{children}</MuiCardHeader>
}
