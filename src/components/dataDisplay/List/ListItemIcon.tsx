import React from 'react'
import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function ListItemIcon(props: ListItemIconProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItemIcon
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItemIcon>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
