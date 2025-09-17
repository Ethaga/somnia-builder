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
import { Address, erc20Abi, formatUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";

const MIN_ABI = erc20Abi;

export default function ERC20Tools() {
  const { address: wallet } = useAccount();
  const [token, setToken] = useState("");

  const {
    data: symbol,
    error: symbolError,
    isError: isSymbolError,
  } = useReadContract({
    abi: MIN_ABI,
    address:
      token && /^0x[a-fA-F0-9]{40}$/.test(token)
        ? (token as Address)
        : undefined,
    functionName: "symbol",
    query: { enabled: !!token && /^0x[a-fA-F0-9]{40}$/.test(token) },
  });

  const {
    data: decimals,
    error: decimalsError,
    isError: isDecimalsError,
  } = useReadContract({
    abi: MIN_ABI,
    address:
      token && /^0x[a-fA-F0-9]{40}$/.test(token)
        ? (token as Address)
        : undefined,
    functionName: "decimals",
    query: { enabled: !!token && /^0x[a-fA-F0-9]{40}$/.test(token) },
  });

  const {
    data: balance,
    error: balanceError,
    isError: isBalanceError,
  } = useReadContract({
    abi: MIN_ABI,
    address:
      token && /^0x[a-fA-F0-9]{40}$/.test(token)
        ? (token as Address)
        : undefined,
    functionName: "balanceOf",
    args: wallet ? [wallet] : undefined,
    query: {
      enabled: !!token && /^0x[a-fA-F0-9]{40}$/.test(token) && !!wallet,
    },
  });

  const formattedBalance = (() => {
    if (balance === undefined || decimals === undefined) return null;
    try {
      return formatUnits(balance as bigint, Number(decimals));
    } catch {
      return null;
    }
  })();

  return (
    <Card>
      <CardHeader>
        <CardTitle>ERC-20 Inspector</CardTitle>
        <CardDescription>
          Read token metadata and your balance. <br />
          <span className="text-xs text-muted-foreground">
            Only works with standard ERC-20 contracts. Example:{" "}
            <b>0x0042e377bFaE03fC5319ba0DdbC0c40cc4A47cd1</b>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Input token address */}
          <div className="space-y-2">
            <Label htmlFor="token">Token Address</Label>
            <Input
              id="token"
              placeholder="0x..."
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            {(isSymbolError || isDecimalsError || isBalanceError) && (
              <div className="text-xs text-red-500 mt-2">
                {decimals === undefined
                  ? "The contract function 'decimals' returned no data. This may mean: the contract does not have 'decimals()', the address is not a contract, or the contract is non-standard. Please check the address and contract type."
                  : symbolError?.message ||
                    decimalsError?.message ||
                    balanceError?.message ||
                    "Contract call failed. Make sure the address is a valid ERC-20 contract on Somnia testnet."}
              </div>
            )}
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Symbol</div>
              <div className="font-medium">{symbol ? String(symbol) : "—"}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Decimals</div>
              <div className="font-medium">
                {decimals !== undefined ? String(decimals) : "—"}
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-muted-foreground">Your Balance</div>
              <div className="font-medium">
                {formattedBalance ? formattedBalance : "—"}
              </div>
            </div>
          </div>

          {/* Explorer button */}
          <div className="pt-2">
            <Button variant="outline" asChild>
              <a
                href={require("@/lib/somnia").SOMNIA_EXPLORER_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open in Somnia Explorer
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
