import React from 'react'
import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function ListItemSecondaryAction(
  props: ListItemSecondaryActionProps
): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItemSecondaryAction
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItemSecondaryAction>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
