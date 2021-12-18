import React from 'react'
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

export interface TabsProps extends Omit<MuiTabsProps, 'onChange'> {
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void
}

export function Tabs(props: TabsProps): JSX.Element {
  const classes = useStyles()
  const { children, className } = props
  return (
    <MuiTabs className={`${classes.root} ${className}`} {...props}>
      {children}
    </MuiTabs>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
