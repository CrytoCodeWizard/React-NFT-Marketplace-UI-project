import React from 'react'
import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function FloatingActionButton(props: MuiFabProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiFab
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiFab>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      background: theme.palette.background.light,
      boxShadow: 'none',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.palette.background.border,

      '& .MuiSvgIcon-root': {
        color: theme.palette.text.primary
      },

      '&:hover': {
        background: theme.palette.background.medium
      }
    }
  }
})
