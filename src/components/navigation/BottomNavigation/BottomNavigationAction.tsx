import React from 'react'
import MuiBottomNavigationAction, {
  BottomNavigationActionProps
} from '@mui/material/BottomNavigationAction'

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = (
  props
) => {
  return <MuiBottomNavigationAction {...props} />
}

export default BottomNavigationAction
