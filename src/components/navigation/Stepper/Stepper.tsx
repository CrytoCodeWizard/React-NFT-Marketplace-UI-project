import React from 'react'
import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function Stepper(props: MuiStepperProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepper {...props} className={classes.root}>
      {children}
    </MuiStepper>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
