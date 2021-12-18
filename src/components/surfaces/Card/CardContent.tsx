import React from 'react'
import { CardContent as MuiCardContent, CardContentProps } from '@mui/material'

export function CardContent(props: CardContentProps): JSX.Element {
  const { children } = props
  return <MuiCardContent {...props}>{children}</MuiCardContent>
}
