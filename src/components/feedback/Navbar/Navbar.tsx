import React from 'react'
import {
  Navbar as MuiNavbar,
  NavbarProps as MuiNavbarProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Navbar(props: MuiNavbarProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiNavbar
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
