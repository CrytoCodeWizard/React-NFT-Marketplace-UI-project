import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RPC_URLS: { [chainId: number]: string } = {
  1074: 'https://evm.wasp.sc.iota.org',
  1075: 'https://evm.wasp.sc.iota-defi.com/',
  1076: 'https://evm.iotabot.strangled.net/'
}

export const injected = new InjectedConnector({
  supportedChainIds: [1074, 1075]
})

export const network = new NetworkConnector({
  urls: {
    1074: RPC_URLS[1074],
    1075: RPC_URLS[1075],
    1076: RPC_URLS[1076]
  },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1074],
    2: RPC_URLS[1075],
    3: RPC_URLS[1076]
  },
  qrcode: true
})
