import { Button } from "@/components/ui/button";
import { useAccount, useBalance, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { somniaShannonTestnet } from "@/lib/somnia";
import { useMemo } from "react";

function truncateAddress(addr: string) {
  return addr.slice(0, 6) + "…" + addr.slice(-4);
}

export function WalletStatus() {
  const { address, chainId, isConnected } = useAccount();
  const { connect, connectors, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const { data: balance } = useBalance({
    address,
    query: { enabled: !!address },
  });

  const onSomnia = chainId === somniaShannonTestnet.id;

  const label = useMemo(() => {
    if (!isConnected) return "Connect Wallet";
    if (!onSomnia) return "Switch to Somnia";
    return truncateAddress(address!);
  }, [isConnected, onSomnia, address]);

  if (!isConnected) {
    const connector = connectors?.[0];
    return (
      <Button
        onClick={() => connector ? connect({ connector }) : undefined}
        variant="default"
        size="sm"
        aria-busy={isConnecting}
      >
        {isConnecting ? "Connecting…" : label}
      </Button>
    );
  }

  if (!onSomnia) {
    return (
      <Button
        onClick={() => switchChain({ chainId: somniaShannonTestnet.id })}
        variant="secondary"
        size="sm"
        aria-busy={isSwitching}
      >
        {isSwitching ? "Switching…" : label}
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground hidden sm:inline">
        {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : ""}
      </span>
      <Button variant="outline" size="sm" onClick={() => disconnect()}>
        {label}
      </Button>
    </div>
  );
}
