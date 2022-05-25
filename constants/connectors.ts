import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const RPC_URL_CNDL = "https://rpc.cndlchain.com/";
const RPC_URL_ETH =
  "https://eth-mainnet.alchemyapi.io/v2/o_bo9q2LMtGvYqr7jsyYSpUrE_azdh9x";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 534],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URL_ETH, 534: RPC_URL_CNDL },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL, //to-do: check later
});
