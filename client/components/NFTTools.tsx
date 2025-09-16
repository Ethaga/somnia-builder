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

  const {
    data: name,
    error: nameError,
    isError: isNameError,
  } = useReadContract({
    abi: ERC721_ABI,
    address: addr,
    functionName: "name",
    query: { enabled: !!addr },
  });
  const {
    data: symbol,
    error: symbolError,
    isError: isSymbolError,
  } = useReadContract({
    abi: ERC721_ABI,
    address: addr,
    functionName: "symbol",
    query: { enabled: !!addr },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>NFT (ERC-721) Inspector</CardTitle>
        <CardDescription>
          Lookup metadata and ownership for NFTs.<br />
          <span className="text-xs text-muted-foreground">
            Only works with standard ERC-721 contracts. Enter contract address and token ID.
          </CardContent>
        </Card>
      );
              <div>
                <div className="text-muted-foreground">Name</div>
                <div className="font-medium">{name ? String(name) : "\u2014"}</div>
              </CardContent>
            </Card>
          );
          </div>
        </div>
      </CardContent>
    </Card>
  );
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Token URI</div>
                        <div className="font-mono text-xs break-all">
                          {tokenURI ? String(tokenURI) : "\u2014"}
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
