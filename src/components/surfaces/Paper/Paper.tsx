import React from 'react'
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper'

export function Paper(props: MuiPaperProps): JSX.Element {
  return <MuiPaper {...props} />
}
