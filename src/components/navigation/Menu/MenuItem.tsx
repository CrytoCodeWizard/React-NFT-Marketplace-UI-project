import React from 'react'
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { children, className } = props
  const classes = useStyles()
  return (
    <MuiMenuItem {...props} className={`${classes.root} ${className}`}>
      {children}
    </MuiMenuItem>
  )
}

const useStyles = makeStyles<Theme>((theme) => {
  return {
    root: {
      background: 'transparent',
      padding: theme.spacing(2),
      borderRadius: theme.radius.small,

      '& .MuiListItemIcon-root': {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
        color: theme.palette.text.primary
      }
    }
  }
})
