import React from 'react'
import { Avatar } from '../../components'
import { Box, BoxProps } from '@mui/material'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { ConnectButton } from './ConnectButton'

const IdentityMenu: React.FC<BoxProps> = (props) => {
  const { onClick } = props
  const context = useWeb3React<Web3Provider>()
  const { account } = context

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      {account ? (
        <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
          <Avatar
            alt='IOTABOT #1'
            src='https://assets.iotabots.io/compressed/1.png'
            sx={{ width: 40, height: 40 }}
          />
        </Box>
      ) : (
        <ConnectButton />
      )}
    </Box>
  )
}

export default IdentityMenu
