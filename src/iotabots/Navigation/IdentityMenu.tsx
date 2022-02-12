import React from 'react'
import { Box, BoxProps } from '@mui/material'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { Avatar } from '../../components'
import { ConnectButton } from '../../web3/ConnectButton'

const ProfileImage: React.FC = (id) => {
  if (id > 0) {
    const url = `https://assets.iotabots.io/compressed/${id}.png`
    return (
      <div>
        <Avatar alt='IOTABOTS' src={url} sx={{ width: 40, height: 40 }} />
      </div>
    )
  } else {
    return (
      <div>
        <Avatar
          alt='IOTABOT #1'
          src='https://assets.iotabots.io/compressed/1.png'
          sx={{ width: 40, height: 40 }}
        />
      </div>
    )
  }
}

export const IdentityMenu: React.FC<BoxProps> = (props) => {
  const { onClick } = props
  const context = useWeb3React<Web3Provider>()
  const { account } = context
  const [bots, setBots] = React.useState<Array<unkown>>([])

  const load = async (): Promise<boolean> => {
    console.log('Hello')
    const URL =
      'https://raw.githubusercontent.com/iotabots/save-the-bots/main/all.txt'

    const res = await fetch(URL)
    const data = await res.text()

    const airdropAddresses: Array<unknown> = []

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

    console.log('airdropAddresses', airdropAddresses)
    console.log('account', account)

    const iotabots = []
    airdropAddresses.forEach((obj) => {
      if (obj.address === account) {
        iotabots.push(obj.id)
      }
    })
    setBots(iotabots)
    console.log('iotabots', iotabots)
    return true
  }

  React.useEffect(() => {
    load()
    console.log('bots', bots)
  }, [account])

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      {account ? (
        <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
          <ProfileImage id={bots[0]} />
          Account{account}
        </Box>
      ) : (
        <ConnectButton />
      )}
    </Box>
  )
}

export default IdentityMenu
