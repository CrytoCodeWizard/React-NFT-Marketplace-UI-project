import React from 'react'
import { Box, BoxProps } from '@mui/material'

export const Logo: React.FC<BoxProps> = (props) => {
  const { onClick } = props
  return (
    <Box
      {...props}
      onClick={onClick}
      sx={{
        '& svg': {
          maxHeight: 40
        },
        '&:hover': { cursor: 'pointer' }
      }}
    >
      <svg
        width='1245'
        height='640'
        viewBox='0 0 1245 640'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M214 313.5L396 319L444.5 379L432 437.5L376 472.5L411 507L394 583L313 639.5L115 635L214 313.5ZM440 536L483 360L553.5 313.5H662L711 367L672.5 542L602.5 597L483 592L440 536ZM799 397L727 393L748.5 313.5L981.5 318.5L966.5 401.5L892 397L851.5 605.5H756.5L799 397ZM989.5 379.5L974.5 468.5L1123 528.5L1110.5 540L960.5 535L948.5 619L1136 625L1210 569.5L1224.5 475L1077 416.5L1085.5 409.5L1233 412L1245 332L1060 325L989.5 379.5ZM543 514L532 502.5L553.5 395.5L569.5 384.5H608.5L619.5 395.5L596 504L582 514H543ZM231.5 547L246.5 507H283.5L302 525.5L285.5 547H231.5ZM277.5 400L269 424.5H306L332.5 410L325.5 400H277.5Z'
          fill='white'
        />
        <path
          d='M26 227.5L0 307.5L163.5 296.5L187.5 214L152.5 215.5L191.5 88.5H228L249.5 11.5L94.5 20.5L68.5 99.5L100.5 97L61 224.5L26 227.5Z'
          fill='white'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M275.5 48L340 4.5H442.5L484 50.5L444 207L378.5 254H270L229 207L275.5 48ZM360 183L374 174.5L398.5 75L393.5 68.5L354.5 70.5L346 78L317 174.5L323 183H360Z'
          fill='white'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M513.5 0L495 71.5H560L515.5 254H599L642 71.5H708.5L727 0H513.5ZM732 50L797 3.5H907.5L957 51L917 264H827L844.5 172.5H790.5L770 264H682.5L732 50ZM802 79.5L816.5 68L860.5 69.5L869 79.5L864.5 101L799.5 98.5L802 79.5Z'
          fill='white'
        />
      </svg>
    </Box>
  )
}

export default Logo
