import React from 'react'
import { List as MuiList, ListProps as MuiListProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export interface ListProps extends MuiListProps {
  component?: string | undefined
}

export function List(props: ListProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiList
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
