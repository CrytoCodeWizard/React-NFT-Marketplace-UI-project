import React from 'react'
import { Step as MuiStep, StepProps as MuiStepProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function Step(props: MuiStepProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStep {...props} className={classes.root}>
      {children}
    </MuiStep>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
