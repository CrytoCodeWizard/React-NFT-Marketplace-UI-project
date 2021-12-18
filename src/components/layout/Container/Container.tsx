import React from 'react'
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Container(props: MuiContainerProps): JSX.Element {
  const classes = useStyles()
  return <MuiContainer className={`${classes.root}`} {...props} />
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
