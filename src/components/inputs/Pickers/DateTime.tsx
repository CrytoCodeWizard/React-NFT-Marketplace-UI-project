import React from 'react'
import MuiDateTimePicker, { DateTimePickerProps } from '@mui/lab/DateTimePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export function DateTimePicker(props: DateTimePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<DateAdapter | null>()

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MuiDateTimePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as DateAdapter)
        }}
      />
    </LocalizationProvider>
  )
}
