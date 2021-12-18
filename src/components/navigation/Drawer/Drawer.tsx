import React from 'react'
import { Drawer as MuiDrawer, DrawerProps } from '@mui/material'

export function Drawer(props: DrawerProps): JSX.Element {
  const { children } = props

  return <MuiDrawer {...props}>{children}</MuiDrawer>
}
