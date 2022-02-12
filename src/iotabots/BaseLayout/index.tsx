/* eslint-disable react/require-default-props */
import React from 'react'
import { Box } from '../../components'
import { Footer } from '../Footer'
import { Frame } from '../Frame'

export interface BaseLayoutProps {
  frame?: boolean
}

export const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { frame = true, children } = props

  return (
    <Box className='page' bgcolor='black'>
      {frame && <Frame />}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh'
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  )
}
