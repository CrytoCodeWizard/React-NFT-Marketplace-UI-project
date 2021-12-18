import React from 'react'
import { Rating as MuiRating } from '@mui/material'
import { RatingProps } from '@mui/lab'

import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Rating(props: RatingProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiRating
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
