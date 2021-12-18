import React from 'react'
import MuiDatePicker, { DatePickerProps } from '@mui/lab/DatePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export function DatePicker(props: DatePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<DateAdapter | null>()

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MuiDatePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as DateAdapter)
        }}
      />
    </LocalizationProvider>
  )
}
