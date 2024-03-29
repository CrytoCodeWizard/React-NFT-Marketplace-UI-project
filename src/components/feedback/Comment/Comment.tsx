import React from 'react'
import {
  Comment as MuiComment,
  CommentProps as MuiCommentProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Comment(props: MuiCommentProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiComment
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
