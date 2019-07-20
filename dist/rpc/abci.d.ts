import { JSONRPC } from "./types";
import bigInteger from "big-integer";
export declare class ResultABCIInfo {
    readonly response: ABCIResponseInfo;
    static fromJSON(obj: JSONRPC): ResultABCIInfo;
    constructor(response: ABCIResponseInfo);
}
export declare class ABCIResponseInfo {
    readonly data: string;
    readonly version: string | undefined;
    readonly appVersion: string | undefined;
    readonly lastBlockHeight: bigInteger.BigInteger;
    readonly lastBlockAppHash: string;
    static fromJSON(obj: any): ABCIResponseInfo;
    constructor(data: string, version: string | undefined, appVersion: string | undefined, lastBlockHeight: bigInteger.BigInteger, lastBlockAppHash: string);
}
export declare class ResultABCIQuery {
    readonly response: ABCIResponseQuery;
    static fromJSON(obj: JSONRPC): ResultABCIQuery;
    constructor(response: ABCIResponseQuery);
}
export declare class ABCIResponseQuery {
    readonly key: Uint8Array;
    readonly value: Uint8Array;
    readonly height: bigInteger.BigInteger;
    static fromJSON(obj: any): ABCIResponseQuery;
    constructor(key: Uint8Array, value: Uint8Array, height: bigInteger.BigInteger);
}
export interface ABCIQueryOptions {
    height: bigInteger.BigNumber;
    prove: boolean;
}
