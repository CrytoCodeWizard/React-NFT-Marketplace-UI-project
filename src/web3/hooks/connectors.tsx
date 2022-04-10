import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RPC_URLS: { [chainId: number]: string } = {
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  1074: 'https://evm.wasp.sc.iota.org',
  1075: 'https://evm.wasp.sc.iota-defi.com/',
  1076: 'https://evm.iotabot.strangled.net/',
  31337: 'http://127.0.0.1:8545/'
}

export const injected = new InjectedConnector({
  supportedChainIds: [97, 1074, 1075, 1076, 31337]
})

export const network = new NetworkConnector({
  urls: {
    97: RPC_URLS[97],
    1074: RPC_URLS[1074],
    1075: RPC_URLS[1075],
    1076: RPC_URLS[1076],
    31337: RPC_URLS[31337]
  },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1074],
    2: RPC_URLS[1075],
    3: RPC_URLS[1076],
    4: RPC_URLS[97],
    5: RPC_URLS[31337]
  },
  qrcode: true
})
