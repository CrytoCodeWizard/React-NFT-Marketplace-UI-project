import React from 'react'
import { Tab as MuiTab, TabProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export function Tab(props: TabProps): JSX.Element {
  const classes = useStyles()
  return <MuiTab className={classes.root} {...props} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
