import * as React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  console.log('library', library)
  library.pollingInterval = 1000
  return library
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IotaWeb3Provider = (props: any): JSX.Element => {
  const { children } = props

  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}
