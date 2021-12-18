import React from 'react'
import MuiCardActions, { CardActionsProps } from '@mui/material/CardActions'

export function CardActions(props: CardActionsProps): JSX.Element {
  const { children } = props
  return <MuiCardActions {...props}>{children}</MuiCardActions>
}
