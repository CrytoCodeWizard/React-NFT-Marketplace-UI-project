import React from 'react'
import MuiCardActionArea, {
  CardActionAreaProps
} from '@mui/material/CardActionArea'

export interface MuiCardActionAreaProps extends CardActionAreaProps {
  href?: string
  target?: string
}

export function CardActionArea(props: MuiCardActionAreaProps): JSX.Element {
  const { children } = props
  return <MuiCardActionArea {...props}>{children}</MuiCardActionArea>
}
