import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function TextField(props: MuiTextFieldProps): JSX.Element {
  const { variant = 'outlined' } = props
  const classes = useStyles()
  return (
    <MuiTextField
      classes={{
        root: classes.root
      }}
      variant={variant}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundColor: 'inherit',
      borderRadius: theme.radius.medium,

      '& .MuiFilledInput-root': {
        borderRadius: theme.radius.medium,
        overflow: 'hidden',
        '&:before': {
          opacity: 0
        }
      },

      '& .MuiInputLabel-root': {
        color: theme.palette.text.secondary,

        '&.Mui-focused': {
          color: theme.palette.primary.main
        }
      },

      '&:hover': {
        '& .MuiInputLabel-root': {
          color: theme.palette.text.primary
        }
      }
    }
  }
})
