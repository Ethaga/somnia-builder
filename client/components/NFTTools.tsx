import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Address, formatUnits } from "viem";
import { useReadContract } from "wagmi";

const ERC721_ABI = [
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
  },
] as const;

export default function NFTTools() {
  const [nft, setNft] = useState("");
  const [tokenId, setTokenId] = useState("");
  const addr =
    nft && /^0x[a-fA-F0-9]{40}$/.test(nft) ? (nft as Address) : undefined;
  const id = tokenId ? BigInt(tokenId) : undefined;

  const { data: name } = useReadContract({
    abi: ERC721_ABI,
    address: addr,
    functionName: "name",
    query: { enabled: !!addr },
  });
  const { data: symbol } = useReadContract({
    abi: ERC721_ABI,
    address: addr,
    functionName: "symbol",
    query: { enabled: !!addr },
  });
  const { data: owner } = useReadContract({
    abi: ERC721_ABI,
    address: addr,
    functionName: "ownerOf",
    args: id ? [id] : undefined,
    query: { enabled: !!addr && !!id },
  });
  const { data: tokenURI } = useReadContract({
    abi: ERC721_ABI,
    address: addr,
    functionName: "tokenURI",
    args: id ? [id] : undefined,
    query: { enabled: !!addr && !!id },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>NFT (ERC-721) Inspector</CardTitle>
        <CardDescription>
          Lookup metadata and ownership for NFTs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nft">NFT Contract Address</Label>
            <Input
              id="nft"
              placeholder="0x..."
              value={nft}
              onChange={(e) => setNft(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tokenId">Token ID</Label>
            <Input
              id="tokenId"
              type="number"
              min="0"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
            />
          </div>
          <div className="grid gap-3 text-sm">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-muted-foreground">Name</div>
                <div className="font-medium">{name ? String(name) : "—"}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Symbol</div>
                <div className="font-medium">
                  {symbol ? String(symbol) : "—"}
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">Owner</div>
                <div className="font-medium truncate">
                  {owner ? String(owner) : "—"}
                </div>
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Token URI</div>
              <div className="font-mono text-xs break-all">
                {tokenURI ? String(tokenURI) : "—"}
              </div>
            </div>
          </div>
          <div className="pt-2">
            <Button variant="outline" asChild>
              <a
                href={require("@/lib/somnia").SOMNIA_EXPLORER_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open Explorer
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
