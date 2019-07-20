import { PubKey, PrivKey } from "../crypto";
import { RNG } from "../utils/key";
import { Context } from "./context";
import { BIP44 } from "./bip44";
export interface WalletProvider {
    /**
     * Return path
     * @param index Addresses are numbered from index 0 in sequentially increasing manner. This number is used as child index in BIP32 derivation.
     * Public derivation is used at this level.
     * @param change Constant 0 is used for external chain and constant 1 for internal chain (also known as change addresses). External chain is used for addresses that are meant to be visible outside of the wallet (e.g. for receiving payments). Internal chain is used for addresses which are not meant to be visible outside of the wallet and is used for return transaction change.
     * Public derivation is used at this level.
     */
    signIn(context: Context, index: number, change?: number): Promise<void>;
    getPubKey(context: Context, address: Uint8Array): Promise<PubKey>;
    getSignerAccounts(context: Context): Promise<Array<{
        address: Uint8Array;
        pubKey: PubKey;
    }>>;
    sign(context: Context, address: Uint8Array, message: Uint8Array): Promise<Uint8Array>;
}
/**
 * Using the this in the browser is not secure and should only be used for development purposes.
 * Use a secure vault outside of the context of the webpage to ensure security when signing transactions in production.
 */
export declare class LocalWalletProvider implements WalletProvider {
    private mnemonic;
    private readonly rng?;
    static generateMnemonic(rng?: RNG): string;
    static getPrivKeyFromMnemonic(bip44: BIP44, mnemonic: string, index: number, change: number): PrivKey;
    private privKey?;
    constructor(mnemonic?: string, rng?: RNG | undefined);
    signIn(context: Context, index: number, change?: number): Promise<void>;
    getPubKey(context: Context, address: Uint8Array): Promise<PubKey>;
    getSignerAccounts(context: Context): Promise<Array<{
        address: Uint8Array;
        pubKey: PubKey;
    }>>;
    sign(context: Context, address: Uint8Array, message: Uint8Array): Promise<Uint8Array>;
}
