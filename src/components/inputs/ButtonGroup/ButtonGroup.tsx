import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps } from '@mui/material'
import { Theme } from '../../../theme/types'
import { makeStyles } from '../../../theme/ThemeProvider'

export function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  const { className, sx } = props
  const classes = useStyles()

  return (
    <MuiButtonGroup
      {...props}
      className={`${classes.root} ${className}`}
      sx={{
        '& .MuiButton-root.MuiButton-contained': {
          borderColor: 'transparent'
        },
        '& .MuiButton-root.MuiButton-text': {
          borderColor: 'transparent'
        },
        ...sx
      }}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderRadius: theme.radius.button,
      '& .MuiButton-root.MuiButton-outlinedPrimary': {
        borderColor: theme.palette.primary.main
      },
      '& .MuiButton-root.MuiButton-containedSecondary': {
        borderColor: theme.palette.background.border
      }
    }
  }
})
