import React from 'react'
import { Box } from '@mui/material'
import edgeTr from './assets/edge-tr.svg'
import edgeBr from './assets/edge-br.svg'
import edgeBl from './assets/edge-bl.svg'
import edgeTl from './assets/edge-tl.svg'
import { EDGE_SIZE, WIDTH } from '.'

const Edges: React.FC = () => {
  const distance = {
    xs: WIDTH.xs - 8,
    md: WIDTH.md - 8
  }
  return (
    <Box
      sx={{
        img: {
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
      <img className='top-right' alt='3D Logo Animation' src={edgeTr} />
      <img className='bottom-right' alt='3D Logo Animation' src={edgeBr} />
      <img className='bottom-left' alt='3D Logo Animation' src={edgeBl} />
      <img className='top-left' alt='3D Logo Animation' src={edgeTl} />
    </Box>
  )
}
export default Edges
