/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Box } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Cursor from './Cursor'
import Shimmer from './Shimmer'

const Pattern: React.FC = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  React.useEffect(() => {
    const setFromEvent = (e: any): void => {
      return setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', setFromEvent)
    return (): void => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  const fixedContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
  } as const

  return (
    <>
      <Box sx={{ ...fixedContainer }}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100vh',
            width: '100%',
            backgroundImage: `url(https://cdn.discordapp.com/attachments/420674357652750367/937447792551526461/pattern.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {matches && <Shimmer position={position} />}
      </Box>
      {matches && <Cursor position={position} />}
    </>
  )
}

export default Pattern
