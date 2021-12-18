/* eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/explicit-module-boundary-types
*/

import React from 'react'
import { ListItem as MuiListItem } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

// TODO: Resolve issue with ListItemProps to replace any type usage
export function ListItem(props: any): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItem
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItem>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
