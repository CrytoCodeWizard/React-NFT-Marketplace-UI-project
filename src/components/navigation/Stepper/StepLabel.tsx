import React from 'react'
import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function StepLabel(props: MuiStepLabelProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepLabel {...props} className={classes.root}>
      {children}
    </MuiStepLabel>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
