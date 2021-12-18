import React from 'react'
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Switch(props: MuiSwitchProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiSwitch
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
