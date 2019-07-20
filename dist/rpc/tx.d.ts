import { JSONRPC } from "./types";
import bigInteger from "big-integer";
export declare class ResultBroadcastTx {
    readonly mode: "async" | "sync";
    readonly code: number;
    readonly data: Uint8Array;
    readonly log: string;
    readonly hash: Uint8Array;
    static fromJSON(obj: JSONRPC, mode: "async" | "sync"): ResultBroadcastTx;
    constructor(mode: "async" | "sync", code: number, data: Uint8Array, log: string, hash: Uint8Array);
}
export declare class ResultBroadcastTxCommit {
    readonly mode: "commit";
    readonly checkTx: ResponseCheckTx;
    readonly deliverTx: ResponseDeliverTx;
    readonly hash: Uint8Array;
    readonly height: bigInteger.BigInteger;
    static fromJSON(obj: JSONRPC): ResultBroadcastTxCommit;
    constructor(mode: "commit", checkTx: ResponseCheckTx, deliverTx: ResponseDeliverTx, hash: Uint8Array, height: bigInteger.BigInteger);
}
export declare class ResponseCheckTx {
    readonly code: number | undefined;
    readonly data: Uint8Array;
    readonly log: string | undefined;
    readonly info: string | undefined;
    readonly gasWanted: bigInteger.BigInteger;
    readonly gasUsed: bigInteger.BigInteger;
    readonly tags: Array<{
        key: Uint8Array;
        value: Uint8Array;
    }>;
    readonly codespace: string | undefined;
    static fromJSON(obj: any): ResponseCheckTx;
    constructor(code: number | undefined, data: Uint8Array, log: string | undefined, info: string | undefined, gasWanted: bigInteger.BigInteger, gasUsed: bigInteger.BigInteger, tags: Array<{
        key: Uint8Array;
        value: Uint8Array;
    }>, codespace: string | undefined);
}
export declare class ResponseDeliverTx {
    readonly code: number | undefined;
    readonly data: Uint8Array;
    readonly log: string | undefined;
    readonly info: string | undefined;
    readonly gasWanted: bigInteger.BigInteger;
    readonly gasUsed: bigInteger.BigInteger;
    readonly tags: Array<{
        key: Uint8Array;
        value: Uint8Array;
    }>;
    readonly codespace: string | undefined;
    static fromJSON(obj: any): ResponseDeliverTx;
    constructor(code: number | undefined, data: Uint8Array, log: string | undefined, info: string | undefined, gasWanted: bigInteger.BigInteger, gasUsed: bigInteger.BigInteger, tags: Array<{
        key: Uint8Array;
        value: Uint8Array;
    }>, codespace: string | undefined);
}
