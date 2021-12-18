import React from 'react'
import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

import { Theme } from '../../../theme/types'

export function IconButton(props: IconButtonProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiIconButton
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}

const useStyles = makeStyles<Theme>((theme: Theme) => {
  return {
    root: {
      color: `${theme.palette.text.secondary} !important`
    }
  }
})
