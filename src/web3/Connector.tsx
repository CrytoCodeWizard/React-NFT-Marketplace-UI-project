import React from 'react'
import { useWeb3React } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

import { Box, Button, Divider } from '../components'
import { useEagerConnect, useInactiveListener } from './hooks/hooks'

// eslint-disable-next-line max-len
const ERROR_NO_ETH_PROVIDER =
  'No Wallet Browser Extension detected, install Browser Extension on desktop or visit from a dApp browser on mobile.'

const getErrorMessage = (error: Error): string => {
  if (error instanceof NoEthereumProviderError) {
    return ERROR_NO_ETH_PROVIDER
  }
  if (
    error instanceof UserRejectedRequestErrorInjected ||
    UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Wallet account.'
  }
  return 'An unknown error occurred. Check the console for more details.'
}

const BlockNumber: React.FC = () => {
  const { chainId, library } = useWeb3React()
  const [blockNumber, setBlockNumber] = React.useState<number>()

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (library) {
      let stale = false

      library
        .getBlockNumber()
        .then((): void => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(0)
          }
        })

      const updateBlockNumber = (): void => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (): any => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
    /* ensures refresh if referential identity of library doesn't change 
    across chainIds */
  }, [library, chainId, blockNumber])

  return <span>{blockNumber === null ? 'Error' : blockNumber ?? '-'}</span>
}

const Balance: React.FC = () => {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then(() => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(undefined)
          }
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (): any => {
        stale = true
        setBalance(undefined)
      }
    }
    return null
  }, [account, library, chainId, balance])

  return (
    <span>
      {/* eslint-disable-next-line no-nested-ternary */}
      {balance === null ? null : balance ? formatEther(balance) : '-'}
    </span>
  )
}

const Header: React.FC = () => {
  const { active, error } = useWeb3React()

  const { account, chainId } = useWeb3React()

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      <h5>Status: {active ? '🟢' : error ? '🔴' : '🟠'}</h5>
      <h5>chainId: {chainId || '-'}</h5>
      <h5>
        BlockNumber: <BlockNumber />
      </h5>
      <h5>address: {account || '-'}</h5>
      <h5>
        Balance:
        <Balance />
      </h5>
    </>
  )
}

const Connector: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, account, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  /* handle logic to eagerly connect to the injected ethereum provider, 
  if it exists and has granted access already */
  const triedEager = useEagerConnect()

  /* handle logic to connect in reaction to certain events on the 
  injected ethereum provider, if it exists */
  useInactiveListener({ suppress: !triedEager || !!activatingConnector })

  return (
    <>
      <Header />
      {/* eslint-disable-next-line no-nested-ternary */}
      {active ? (
        <Button
          size='large'
          variant='contained'
          onClick={(): void => {
            deactivate()
          }}
        >
          Disconnect
        </Button>
      ) : error ? (
        <Button
          size='large'
          variant='contained'
          onClick={(): void => {
            deactivate()
          }}
        >
          Cancel Connect
        </Button>
      ) : (
        'connect'
      )}

      {error && (
        <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>
          {getErrorMessage(error)}
        </h4>
      )}

      <Divider sx={{ my: 6 }} />

      <Box>
        {library && account && (
          <Button
            size='large'
            fullWidth
            variant='contained'
            onClick={(): void => {
              library
                .getSigner(account)
                .signMessage('👋')
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((signature: any) => {
                  // eslint-disable-next-line no-console
                  console.log(`Success!\n\n${signature}`)
                })
                .catch(() => {
                  // eslint-disable-next-line no-console
                  console.log(
                    `Failure!${
                      error && error.message ? `\n\n${error.message}` : ''
                    }`
                  )
                })
            }}
          >
            Sign Message
          </Button>
        )}
      </Box>
    </>
  )
}

export default Connector
