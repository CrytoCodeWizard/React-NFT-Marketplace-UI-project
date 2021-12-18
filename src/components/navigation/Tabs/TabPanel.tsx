import React from 'react'
import { Box } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

interface TabPanelProps {
  children: React.ReactNode
  index: string | number
  value: string | number
}

export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
