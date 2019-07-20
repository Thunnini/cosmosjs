import { AccAddress } from "./address";
import { PubKey } from "../crypto";
import bigInteger from "big-integer";
import { Coin } from "./coin";
import { Account } from "../core/account";
export declare class BaseAccount implements Account {
    static fromJSON(obj: any): BaseAccount;
    private address;
    private pubKey;
    private accountNumber;
    private sequence;
    private coins;
    constructor(address: AccAddress, pubKey: PubKey | undefined, accountNumber: bigInteger.BigNumber, sequence: bigInteger.BigNumber, coins: Coin[]);
    getAddress(): AccAddress;
    getPubKey(): PubKey | undefined;
    getAccountNumber(): bigInteger.BigInteger;
    getSequence(): bigInteger.BigInteger;
    getCoins(): Coin[];
}
