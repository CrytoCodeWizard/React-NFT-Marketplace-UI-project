import React from 'react'
import { MenuList as MuiMenuList, MenuListProps } from '@mui/material'

export function MenuList(props: MenuListProps): JSX.Element {
  const { children } = props
  return <MuiMenuList {...props}>{children}</MuiMenuList>
}
