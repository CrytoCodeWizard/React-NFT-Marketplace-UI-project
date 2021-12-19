import React from 'react'
import { Container, Box, Typography } from '@mui/material'

export interface ContentBoxProps {
  title: string
  text: string
  image: string
}

export const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const { title, text, image } = props
  return (
    <Container>
      {image && <Box />}
      <Box>
        <Typography>{title}</Typography>
      </Box>
      <Typography>{text}</Typography>
    </Container>
  )
}
