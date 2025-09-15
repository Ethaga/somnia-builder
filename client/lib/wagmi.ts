import { http, createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
import { QueryClient } from "@tanstack/react-query";
import { somniaShannonTestnet } from "./somnia";

export const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [somniaShannonTestnet],
  transports: {
    [somniaShannonTestnet.id]: http(somniaShannonTestnet.rpcUrls.default.http[0]),
  },
  connectors: [injected()],
  ssr: false,
});
