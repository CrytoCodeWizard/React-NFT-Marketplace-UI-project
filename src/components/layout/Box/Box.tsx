import React from 'react'
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Box(props: MuiBoxProps): JSX.Element {
  const classes = useStyles()
  return <MuiBox className={`${classes.root}`} {...props} />
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
