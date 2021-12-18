import React from 'react'
import { Skeleton as MuiSkeleton } from '@mui/material'
import { SkeletonProps } from '@mui/lab'

import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Skeleton(props: SkeletonProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiSkeleton
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
