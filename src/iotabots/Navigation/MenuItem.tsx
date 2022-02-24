import React from 'react'
import { Box, BoxProps, Typography } from '@mui/material'

export interface MenuItemProps extends BoxProps {
  label: string
  active?: boolean
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { label, active = false } = props

  return (
    <Box
      {...props}
      sx={{
        minWidth: '100px',
        height: '42px',
        px: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: active ? 'rgba(255,255,255,1)' : 'transparent',
        color: active ? 'black' : 'rgba(255,255,255,1)',
        borderRadius: '8px',
        '&:hover': {
          cursor: 'pointer',
          bgcolor: 'primary.main',
          color: 'common.white'
        }
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'Roboto Serif',
          fontSize: 18,
          fontWeight: '600'
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export default MenuItem
