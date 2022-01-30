import React from 'react'
import { Box } from '@mui/material'
import { EDGE_SIZE, WIDTH } from '.'
import EdgeTr from './assets/EdgeTr'
import EdgeBr from './assets/EdgeBr'
import EdgeBl from './assets/EdgeBl'
import EdgeTl from './assets/EdgeTl'

const Edges: React.FC = () => {
  const distance = {
    xs: WIDTH.xs - 8,
    md: WIDTH.md - 8
  }
  return (
    <Box
      sx={{
        svg: {
          position: 'fixed',
          zIndex: 9,
          width: { ...EDGE_SIZE },

          '&.top-right': {
            top: { ...distance },
            right: { ...distance }
          },
          '&.bottom-right': {
            bottom: { ...distance },
            right: { ...distance }
          },
          '&.bottom-left': {
            bottom: { ...distance },
            left: { ...distance }
          },
          '&.top-left': {
            top: { ...distance },
            left: { ...distance }
          }
        }
      }}
    >
      <EdgeTr />
      <EdgeBr />
      <EdgeBl />
      <EdgeTl />
    </Box>
  )
}
export default Edges
