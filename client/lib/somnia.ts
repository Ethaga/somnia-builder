import { type Chain } from "wagmi/chains";

export const somniaShannonTestnet: Chain = {
  id: 50312,
  name: "Somnia Shannon Testnet",
  nativeCurrency: { name: "Somnia Test Token", symbol: "STT", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://somnia.publicnode.com/",
        "https://dream-rpc.somnia.network/",
        "https://somnia-json-rpc.stakely.io",
      ],
    },
    public: {
      http: [
        "https://somnia.publicnode.com/",
        "https://dream-rpc.somnia.network/",
        "https://somnia-json-rpc.stakely.io",
      ],
    },
  },
  blockExplorers: {
    default: {
      name: "Somnia Explorer",
      url: "https://shannon-explorer.somnia.network/",
    },
  },
  testnet: true,
};

export const SOMNIA_DOCS_URL = "https://docs.somnia.network/";
export const SOMNIA_NETWORK_INFO_URL =
  "https://docs.somnia.network/developer/network-info";
export const SOMNIA_FAUCET_URL = "https://testnet.somnia.network/";
export const SOMNIA_EXPLORER_URL = "https://shannon-explorer.somnia.network/";
