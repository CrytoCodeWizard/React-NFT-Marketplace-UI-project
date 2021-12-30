import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RPC_URLS: { [chainId: number]: string } = {
  1074: 'https://evm.wasp.sc.iota.org'
}

export const injected = new InjectedConnector({
  supportedChainIds: [1074]
})

export const network = new NetworkConnector({
  urls: { 1074: RPC_URLS[1074] },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true
})
