import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RPC_URLS: { [chainId: number]: string } = {
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  1071: 'https://json-rpc.evm.testnet.shimmer.network/',
  31337: 'http://127.0.0.1:8545/'
}

export const injected = new InjectedConnector({
  supportedChainIds: [97, 1071, 31337]
})

export const network = new NetworkConnector({
  urls: {
    97: RPC_URLS[97],
    1071: RPC_URLS[1071],
    31337: RPC_URLS[31337]
  },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1071],
    2: RPC_URLS[97],
    3: RPC_URLS[31337]
  },
  qrcode: true
})
