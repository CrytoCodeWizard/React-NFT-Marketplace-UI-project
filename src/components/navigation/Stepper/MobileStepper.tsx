import React from 'react'
import {
  MobileStepper as MuiMobileStepper,
  MobileStepperProps as MuiMobileStepperProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function MobileStepper(props: MuiMobileStepperProps): JSX.Element {
  const classes = useStyles()

  return <MuiMobileStepper {...props} className={classes.root} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
