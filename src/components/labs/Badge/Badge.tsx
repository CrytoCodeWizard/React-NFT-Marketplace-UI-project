import React from 'react'
import { Badge as MuiBadge, BadgeProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Badge(props: BadgeProps): JSX.Element {
  const classes = useStyles()
  const { color = 'primary' } = props
  return (
    <MuiBadge
      classes={{
        root: classes.root
      }}
      {...props}
      color={color}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
