import React from 'react'
import { Slider as MuiSlider, SliderProps } from '@mui/material'

export function Slider(props: SliderProps): JSX.Element {
  return <MuiSlider {...props} />
}
