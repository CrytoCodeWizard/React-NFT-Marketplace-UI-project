import React from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps
} from '@mui/material'

export function Dialog(props: MuiDialogProps): JSX.Element {
  return <MuiDialog {...props} />
}
