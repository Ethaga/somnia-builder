import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { parseEther } from "viem";
import { useAccount, useSendTransaction } from "wagmi";

const schema = z.object({
  to: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  amount: z.string().refine((v) => Number(v) > 0, { message: "Must be > 0" }),
});

export default function SendSTTForm() {
  const { isConnected } = useAccount();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { data: txHash, isPending, sendTransaction } = useSendTransaction();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ to, amount });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setError(null);
    sendTransaction({ to: parsed.data.to as `0x${string}`, value: parseEther(parsed.data.amount) });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send STT</CardTitle>
        <CardDescription>Transfer native Somnia tokens (STT) on Shannon Testnet.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="to">Recipient Address</Label>
            <Input id="to" placeholder="0x..." value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (STT)</Label>
            <Input id="amount" type="number" min="0" step="0.0001" placeholder="0.1" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex gap-2">
            <Button type="submit" disabled={!isConnected || isPending}>
              {isPending ? "Sending…" : "Send"}
            </Button>
            {txHash && (
              <a className="text-sm underline self-center" href={`https://shannon-explorer.somnia.network/tx/${txHash}`} target="_blank" rel="noreferrer">
                View on Explorer
              </a>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
