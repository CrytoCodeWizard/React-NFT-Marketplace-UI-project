import React from 'react'
import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps
} from '@mui/material/Breadcrumbs'

export function Breadcrumbs(props: MuiBreadcrumbsProps): JSX.Element {
  const { children } = props
  return <MuiBreadcrumbs {...props}>{children}</MuiBreadcrumbs>
}
