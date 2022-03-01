import React from 'react'
import { Box, BoxProps } from '@mui/material'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { ConnectButton } from '../../web3/ConnectButton'
import ProfileImage from './ProfileImage'

interface WhitelistItem {
  id: string
  address: string
}

export const IdentityMenu: React.FC<BoxProps> = (props) => {
  const { account } = useWeb3React<Web3Provider>()
  const [bots, setBots] = React.useState<number[]>([])
  const { onClick } = props

  const load = async (): Promise<boolean> => {
    const URL =
      'https://raw.githubusercontent.com/iotabots/save-the-bots/main/all.txt'

    const res = await fetch(URL)
    const data = await res.text()

    const airdropAddresses: WhitelistItem[] = []

    if (!data) {
      return false
    }

    const array = data.split('\n')
    // for (var i = 0; i < array.length; i++) {
    for (let index = 0; index < array.length - 1; index += 1) {
      const botData = array[index].split(':')
      const obj = {
        id: botData[0],
        address: botData[1]
      }
      airdropAddresses.push(obj)
    }

    console.log('NFT Components: IdentityMenu.tsx, account', account)

    const iotabots: number[] = []
    airdropAddresses.forEach((obj) => {
      if (obj.address === account) {
        iotabots.push(Number(obj.id))
      }
    })
    setBots(iotabots)
    return true
  }

  React.useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      {account ? (
        <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
          <ProfileImage id={bots[0]} />
        </Box>
      ) : (
        <ConnectButton />
      )}
    </Box>
  )
}

export default IdentityMenu
