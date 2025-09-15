import { SOMNIA_DOCS_URL, SOMNIA_EXPLORER_URL } from "@/lib/somnia";

export default function SiteFooter() {
  return (
    <footer className="border-t py-10 mt-16">
      <div className="container grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <div className="font-semibold text-foreground">Somnia Builder</div>
          <p className="mt-2">Build DeFi protocols, NFT utilities, and dev tooling that run entirely on Somnia.</p>
        </div>
        <div>
          <div className="font-semibold text-foreground">Resources</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:underline" href={SOMNIA_DOCS_URL} target="_blank" rel="noreferrer">Documentation</a></li>
            <li><a className="hover:underline" href={SOMNIA_EXPLORER_URL} target="_blank" rel="noreferrer">Explorer</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-foreground">Status</div>
          <p className="mt-2">Somnia Shannon Testnet • Chain ID 50312</p>
        </div>
      </div>
    </footer>
  );
}
