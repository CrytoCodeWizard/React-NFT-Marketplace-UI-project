import React from 'react'
import { Box } from '@mui/material'
import MenuItem, { MenuItemProps } from './MenuItem'

interface MenuProps {
  menu: MenuItemProps[]
}

const Menu: React.FC<MenuProps> = (props) => {
  const { menu } = props
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 7,
        left: '50%',
        transform: 'translateX(-50%)',
        display: { xs: 'none', md: 'block' },
        bgcolor: 'background.paper',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0,0,0,0.5)',
        p: '4px',
        borderRadius: '8px',
        height: 50
      }}
    >
      <Box
        sx={{
          display: 'flex',
          borderRadius: '6px',
          overflow: 'hidden',
          height: 42
        }}
      >
        {menu.map((item) => {
          return <MenuItem {...item} />
        })}
      </Box>
    </Box>
  )
}

export default Menu
