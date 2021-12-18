import React from 'react'
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Tooltip(props: TooltipProps): JSX.Element {
  const classes = useStyles()
  return <MuiTooltip className={classes.root} {...props} />
}

// TODO: - adding Customized tooltips
//         https://mui.com/components/tooltips/#customized-tooltips

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
