import { TxEncoder } from "./tx";
import { AxiosInstance } from "axios";
import { TxBuilder } from "./txBuilder";
import { Bech32Config } from "./bech32Config";
import { WalletProvider } from "./walletProvider";
import { QueryAccount } from "./account";
import { BIP44 } from "./bip44";
export declare class ImmutableContext<T> {
    private context;
    constructor(context: T);
    get<K extends keyof T>(key: K): T[K];
    set<K extends keyof T>(key: K, value: T[K]): ImmutableContext<T>;
}
export interface IContext {
    chainId: string;
    txEncoder: TxEncoder;
    txBuilder: TxBuilder;
    bech32Config: Bech32Config;
    walletProvider: WalletProvider;
    rpcInstance: AxiosInstance;
    restInstance: AxiosInstance;
    queryAccount: QueryAccount;
    bip44: BIP44;
}
export declare class Context extends ImmutableContext<IContext> {
}
