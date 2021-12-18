import React from 'react'
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'

const Card: React.FC<MuiCardProps> = (props) => {
  const { children } = props
  return <MuiCard {...props}>{children}</MuiCard>
}

export default Card
