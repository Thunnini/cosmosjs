import { PubKey } from "../crypto";
import { Context } from "./context";
import { WalletProvider } from "./walletProvider";
/**
 * This wallet provider provides a basic client interface to communicate with a Tendermint/Cosmos App running in a Ledger Nano S/X
 * Note: WebUSB support requires Cosmos app >= 1.5.3
 */
export declare class LedgerWalletProvider implements WalletProvider {
    readonly transport: "WebUSB" | "U2F" | "HID";
    private app;
    private path;
    private account;
    constructor(transport: "WebUSB" | "U2F" | "HID");
    signIn(context: Context, index: number, change?: number): Promise<void>;
    getPubKey(context: Context, address: Uint8Array): Promise<PubKey>;
    getSignerAccounts(context: Context): Promise<Array<{
        address: Uint8Array;
        pubKey: PubKey;
    }>>;
    sign(context: Context, address: Uint8Array, message: Uint8Array): Promise<Uint8Array>;
}
