import { Tx, Msg, TxEncoder } from "../core/tx";
import { Coin } from "./coin";
import bigInteger from "big-integer";
import { PubKey } from "../crypto";
export declare class StdTx implements Tx {
    msgs: Msg[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
    constructor(msgs: Msg[], fee: StdFee, signatures: StdSignature[], memo?: string);
    getMsgs(): Msg[];
    validateBasic(): void;
}
declare const defaultTxEncoder: TxEncoder;
export { defaultTxEncoder };
export declare class StdFee {
    amount: Coin[];
    gas: bigInteger.BigInteger;
    constructor(amount: Coin[], gas: bigInteger.BigNumber);
}
declare class RawMessage {
    raw: Uint8Array;
    constructor(raw: Uint8Array);
    marshalJSON(): string;
}
export declare class StdSignDoc {
    accountNumber: bigInteger.BigInteger;
    chainId: string;
    feeRaw: RawMessage;
    memo: string;
    msgsRaws: RawMessage[];
    sequence: bigInteger.BigInteger;
    constructor(accountNumber: bigInteger.BigNumber, chainId: string, fee: StdFee, memo: string, msgs: Msg[], sequence: bigInteger.BigNumber);
    getSignBytes(): Uint8Array;
}
export declare class StdSignature {
    pubKey: PubKey;
    signature: Uint8Array;
    constructor(pubKey: PubKey, signature: Uint8Array);
}
