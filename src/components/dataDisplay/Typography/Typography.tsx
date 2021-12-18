import React from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Typography(props: TypographyProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiTypography
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6':
        {
          fontWeight: theme.typography.fontWeightBold
        }
    }
  }
})
