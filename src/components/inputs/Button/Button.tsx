import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Button(props: ButtonProps): JSX.Element {
  const { variant = 'contained', color = 'primary' } = props
  const classes = useStyles()
  return (
    <MuiButton
      classes={{
        root: classes.root,
        text: classes.text,
        textPrimary: classes.textPrimary,
        outlined: classes.outlined,
        outlinedPrimary: classes.outlinedPrimary,
        contained: classes.contained,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
        disabled: classes.disabled
      }}
      variant={variant}
      color={color}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.background.border,
      borderRadius: theme.radius.button,
      background: theme.palette.background.paper,
      boxShadow: 'none',
      '&:hover': {
        background: theme.shadows[0]
      }
    },
    text: {
      borderColor: 'transparent',
      background: 'transparent',
      '&:hover': {
        background: theme.palette.background.light
      }
    },
    textPrimary: {
      borderColor: 'transparent',
      background: 'transparent',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.common.white,
        background: theme.palette.primary.main
      }
    },
    sizeLarge: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    sizeSmall: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    outlined: {
      borderColor: theme.palette.text.primary,
      color: theme.palette.text.primary,
      '&:hover': {
        background: theme.palette.background.light,
        borderColor: theme.palette.text.primary
      }
    },
    outlinedPrimary: {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.background.paper,
        borderColor: theme.palette.primary.dark
      }
    },
    contained: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '&:hover': {
        background: theme.palette.background.light
      }
    },
    containedPrimary: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderColor: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.common.white,
        background: theme.palette.primary.dark
      }
    },
    containedSecondary: {
      background: theme.palette.background.light,
      '&:hover': {
        background: theme.palette.background.medium
      }
    },
    disabled: {
      '&$disabled': {
        color: theme.palette.text.disabled,
        background: theme.palette.background.default,
        borderColor: theme.palette.background.border
      }
    }
  }
})
