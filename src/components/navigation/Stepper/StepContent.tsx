import React from 'react'
import {
  StepContent as MuiStepContent,
  StepContentProps as MuiStepContentProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function StepContent(props: MuiStepContentProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepContent {...props} className={classes.root}>
      {children}
    </MuiStepContent>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
