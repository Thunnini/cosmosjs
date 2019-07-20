import { RPC } from "../core/rpc";
import { Context } from "../core/context";
import { ResultStatus } from "./status";
import { ResultABCIInfo, ResultABCIQuery, ABCIQueryOptions } from "./abci";
import { ResultBroadcastTx, ResultBroadcastTxCommit } from "./tx";
export declare class TendermintRPC extends RPC {
    constructor(context: Context);
    status(): Promise<ResultStatus>;
    abciInfo(): Promise<ResultABCIInfo>;
    abciQuery(path: string, data: Uint8Array | string, opts?: ABCIQueryOptions): Promise<ResultABCIQuery>;
    broadcastTx(tx: Uint8Array, mode: "sync" | "async"): Promise<ResultBroadcastTx>;
    broadcastTxCommit(tx: Uint8Array): Promise<ResultBroadcastTxCommit>;
}
