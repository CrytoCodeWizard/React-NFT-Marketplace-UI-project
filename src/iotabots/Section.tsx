import { Box, BoxProps } from '@mui/material'
import React from 'react'

export const Section: React.FC<BoxProps> = (props) => {
  const { children, sx } = props
  return (
    <Box
      {...props}
      sx={{
        pt: { xs: 11, md: '160px' },
        px: { xs: 6, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
