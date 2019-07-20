import { JSONRPC } from "./types";
import bigInteger from "big-integer";
export declare class ResultStatus {
    readonly nodeInfo: NodeInfo;
    readonly syncInfo: SyncInfo;
    readonly validatorInfo: ValidatorInfo;
    static fromJSON(obj: JSONRPC): ResultStatus;
    constructor(nodeInfo: NodeInfo, syncInfo: SyncInfo, validatorInfo: ValidatorInfo);
}
export declare class NodeInfo {
    readonly protocolVersion: {
        p2p: number;
        block: number;
        app: number;
    };
    readonly id: string;
    readonly listenAddr: string;
    readonly network: string;
    readonly version: string;
    readonly channels: string;
    readonly moniker: string;
    readonly other: {
        txIndex: boolean;
        rpcAddress: string;
    };
    static fromJSON(obj: any): NodeInfo;
    constructor(protocolVersion: {
        p2p: number;
        block: number;
        app: number;
    }, id: string, listenAddr: string, network: string, version: string, channels: string, moniker: string, other: {
        txIndex: boolean;
        rpcAddress: string;
    });
}
export declare class SyncInfo {
    readonly latestBlockHash: string;
    readonly latestAppHash: string;
    readonly latestBlockHeight: bigInteger.BigInteger;
    readonly latestBlockTime: Date;
    readonly catchingUp: boolean;
    static fromJSON(obj: any): SyncInfo;
    constructor(latestBlockHash: string, latestAppHash: string, latestBlockHeight: bigInteger.BigInteger, latestBlockTime: Date, catchingUp: boolean);
}
export declare class ValidatorInfo {
    readonly address: string;
    readonly votingPower: bigInteger.BigInteger;
    static fromJSON(obj: any): ValidatorInfo;
    constructor(address: string, votingPower: bigInteger.BigInteger);
}
