import React from 'react'
import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function ListItemAvatar(props: ListItemAvatarProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItemAvatar
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItemAvatar>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
