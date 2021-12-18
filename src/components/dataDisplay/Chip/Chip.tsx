import React from 'react'
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Chip(props: MuiChipProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiChip
      classes={{
        root: classes.root,
        colorPrimary: classes.colorPrimary,
        colorSecondary: classes.colorSecondary,
        disabled: classes.disabled,
        outlined: classes.outlined,
        outlinedPrimary: classes.outlinedPrimary,
        outlinedSecondary: classes.outlinedSecondary
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      background: theme.palette.background.light,
      color: theme.palette.text.primary
    },
    colorPrimary: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    colorSecondary: {
      background: theme.palette.background.light,
      color: theme.palette.text.primary
    },
    disabled: {
      background: theme.palette.background.light,
      color: theme.palette.text.disabled
    },
    outlined: {
      borderColor: theme.palette.background.border
    },
    outlinedPrimary: {
      borderColor: theme.palette.primary.dark
    },
    outlinedSecondary: {
      borderColor: theme.palette.primary.dark
    }
  }
})
