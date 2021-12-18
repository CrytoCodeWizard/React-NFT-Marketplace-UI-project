import React from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'

export interface LinkProps extends MuiLinkProps {
  component?: string
}

export function Link(props: LinkProps): JSX.Element {
  return <MuiLink {...props} />
}
