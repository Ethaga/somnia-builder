import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WalletStatus } from "@/components/wallet/WalletStatus";
import {
  SOMNIA_DOCS_URL,
  SOMNIA_EXPLORER_URL,
  SOMNIA_FAUCET_URL,
  SOMNIA_NETWORK_INFO_URL,
} from "@/lib/somnia";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500"></span>
            <span className="font-semibold tracking-tight">Somnia Builder</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6 text-sm text-muted-foreground">
            <a
              href={SOMNIA_DOCS_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Docs
            </a>
            <a
              href={SOMNIA_NETWORK_INFO_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Network
            </a>
            <a
              href={SOMNIA_FAUCET_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Faucet
            </a>
            <a
              href={SOMNIA_EXPLORER_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Explorer
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <WalletStatus />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
          >
            <a href={SOMNIA_EXPLORER_URL} target="_blank" rel="noreferrer">
              View Chain
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
