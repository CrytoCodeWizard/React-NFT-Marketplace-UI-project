import React from 'react'
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

export type AutocompleteProps = MuiAutocompleteProps<string, true, true, true>

export function Autocomplete(props: AutocompleteProps): JSX.Element {
  const classes = useStyles()
  return <MuiAutocomplete className={classes.root} {...props} />
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
