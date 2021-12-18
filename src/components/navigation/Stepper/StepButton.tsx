import React from 'react'
import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps
} from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function StepButton(props: MuiStepButtonProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepButton {...props} className={classes.root}>
      {children}
    </MuiStepButton>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
