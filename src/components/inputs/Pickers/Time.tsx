import React from 'react'
import MuiTimePicker, { TimePickerProps } from '@mui/lab/TimePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export function TimePicker(props: TimePickerProps): JSX.Element {
  const [selectedDate, setDate] = React.useState<DateAdapter | null>()

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MuiTimePicker
        {...props}
        value={selectedDate}
        onChange={(newDate): void => {
          return setDate(newDate as DateAdapter)
        }}
      />
    </LocalizationProvider>
  )
}
