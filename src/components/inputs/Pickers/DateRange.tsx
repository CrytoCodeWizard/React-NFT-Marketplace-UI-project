import * as React from 'react'
import MuiDateRangePicker, {
  DateRangePickerProps
} from '@mui/lab/DateRangePicker'
import { makeStyles } from '../../../theme/ThemeProvider'
import { Theme } from '../../../theme/types'

export function DateRangePicker(
  props: DateRangePickerProps<Date>
): JSX.Element {
  const classes = useStyles()

  return <MuiDateRangePicker {...props} className={classes.root} />
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      '& .MuiButtonBase-root.MuiIconButton-root': {
        color: theme.palette.text.secondary
      }
    }
  }
})
