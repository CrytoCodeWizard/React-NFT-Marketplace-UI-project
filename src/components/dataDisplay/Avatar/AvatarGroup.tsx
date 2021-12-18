import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { AvatarGroup as MuiAvatarGroup } from '@mui/material'
import { AvatarGroupProps } from '@mui/lab'
import { Theme } from '../../../theme/types'

export function AvatarGroup(props: AvatarGroupProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiAvatarGroup
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiAvatarGroup>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
