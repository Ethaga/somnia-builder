export default function ArchitectureDiagram() {
  return (
    <div className="w-full rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Architecture</h3>
      <p className="text-sm text-muted-foreground mb-4">
        This dApp runs fully client-side. Wallet connects with injected providers (e.g., MetaMask). On-chain reads and writes use viem/wagmi directly against Somnia RPC. No custom backend.
      </p>
      <svg viewBox="0 0 980 360" className="w-full h-auto">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="300" height="120" rx="12" fill="url(#g1)" opacity="0.12" stroke="#6d28d9" />
        <text x="40" y="55" fontSize="16" fontWeight="600" fill="currentColor">UI (React + Tailwind)</text>
        <text x="40" y="85" fontSize="13" fill="currentColor">- Wallet connect</text>
        <text x="40" y="105" fontSize="13" fill="currentColor">- Send STT</text>
        <text x="40" y="125" fontSize="13" fill="currentColor">- ERC-20 & NFT tools</text>

        <rect x="360" y="20" width="280" height="120" rx="12" fill="url(#g1)" opacity="0.12" stroke="#6d28d9" />
        <text x="380" y="55" fontSize="16" fontWeight="600" fill="currentColor">Web3 Client (wagmi + viem)</text>
        <text x="380" y="85" fontSize="13" fill="currentColor">- JSON-RPC calls</text>
        <text x="380" y="105" fontSize="13" fill="currentColor">- Contract reads/writes</text>

        <rect x="700" y="20" width="260" height="120" rx="12" fill="url(#g1)" opacity="0.12" stroke="#6d28d9" />
        <text x="720" y="55" fontSize="16" fontWeight="600" fill="currentColor">Somnia Shannon Testnet</text>
        <text x="720" y="85" fontSize="13" fill="currentColor">- RPC endpoints</text>
        <text x="720" y="105" fontSize="13" fill="currentColor">- Block Explorer</text>

        <path d="M320 80 L360 80" stroke="#6d28d9" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M640 80 L700 80" stroke="#6d28d9" strokeWidth="2" markerEnd="url(#arrow)" />

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#6d28d9" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
