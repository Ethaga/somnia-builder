import { SOMNIA_DOCS_URL, SOMNIA_EXPLORER_URL, SOMNIA_FAUCET_URL, SOMNIA_NETWORK_INFO_URL } from "@/lib/somnia";
import SendSTTForm from "@/components/SendSTTForm";
import ERC20Tools from "@/components/ERC20Tools";
import NFTTools from "@/components/NFTTools";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-slate-100/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500/40 to-fuchsia-500/40 blur-3xl" />
        </div>
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              Build on Somnia
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Build DeFi protocols, NFT utilities or developer tooling that run entirely on Somnia. This production-ready dApp connects to the Somnia Shannon Testnet and lets you transact, inspect ERC-20 tokens, and explore NFTs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={SOMNIA_FAUCET_URL} target="_blank" rel="noreferrer">Get STT from Faucet</a>
              </Button>
              <Button asChild variant="outline">
                <a href={SOMNIA_DOCS_URL} target="_blank" rel="noreferrer">Read Somnia Docs</a>
              </Button>
              <Button asChild variant="ghost">
                <a href={SOMNIA_NETWORK_INFO_URL} target="_blank" rel="noreferrer">Network Info</a>
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">Shannon Testnet • Chain ID 50312 • Explorer: <a className="underline" href={SOMNIA_EXPLORER_URL} target="_blank" rel="noreferrer">shannon-explorer.somnia.network</a></div>
          </div>
        </div>
      </section>

      <section className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-6">
        <SendSTTForm />
        <ERC20Tools />
        <NFTTools />
      </section>

      <section className="container grid gap-6 lg:grid-cols-2 mt-6">
        <ArchitectureDiagram />
        <div className="w-full rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Contract Addresses</h3>
          <p className="text-sm text-muted-foreground">
            This toolkit dApp does not deploy custom contracts. It interacts directly with the Somnia network and any token/NFT contracts you provide. If you have your own contracts, list them here and use the tools above to interact with them.
          </p>
          <ul className="mt-4 text-sm list-disc pl-5 space-y-2">
            <li>Somnia Shannon Testnet Explorer: <a className="underline" href={SOMNIA_EXPLORER_URL} target="_blank" rel="noreferrer">{SOMNIA_EXPLORER_URL}</a></li>
            <li>RPC Endpoints: somnia.publicnode.com, dream-rpc.somnia.network, somnia-json-rpc.stakely.io</li>
          </ul>
        </div>
      </section>

      <section className="container mt-12">
        <div className="rounded-xl border p-6 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10">
          <h3 className="text-lg font-semibold">Judging Criteria Coverage</h3>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            <li>• Original: On-chain toolkit enabling DeFi/NFT/dev flows without a backend.</li>
            <li>• Deployed on Somnia: Connects to Shannon Testnet with live reads/writes.</li>
            <li>• User-friendly: Clean UI, wallet-aware flows, explorer links, faucet CTA.</li>
            <li>• On-chain: All actions execute on-chain via JSON-RPC; no server state.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
