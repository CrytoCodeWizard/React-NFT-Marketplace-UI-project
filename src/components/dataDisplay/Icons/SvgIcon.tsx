import React from 'react'
import { SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

import { Theme } from '../../../theme/types'

export function SvgIcon(props: SvgIconProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiSvgIcon
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiSvgIcon>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
