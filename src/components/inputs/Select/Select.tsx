import React from 'react'
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  SelectChangeEvent
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
}

export function Select(props: SelectProps): JSX.Element {
  const classes = useStyles()
  const { variant = 'outlined' } = props
  return <MuiSelect className={classes.root} variant={variant} {...props} />
}

export type { SelectChangeEvent }

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      '& .MuiSelect-iconFilled': {
        color: theme.palette.text.primary
      }
    }
  }
})
