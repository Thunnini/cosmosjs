import { Address } from "../crypto";
import { Bech32Config } from "../core/bech32Config";
export declare function useGlobalBech32Config(config: Bech32Config | undefined): void;
/**
 * If bech32config is just global variable, it make conflicts when you use mutiple chain api in an application.
 * So, to overcome this, each config should be used in separated way.
 * Use Bech32 encoding, decoding within this function.
 * But if you just use only one chain api in general way, you can use [[useGlobalBech32Config]] for convenience
 */
export declare function useBech32Config<T>(config: Bech32Config, fn: () => T): T;
export declare function useBech32ConfigPromise<T>(config: Bech32Config, fn: () => Promise<T>): Promise<T>;
export declare class AccAddress {
    static fromBech32(bech32Addr: string): AccAddress;
    private address;
    constructor(address: Uint8Array | Address);
    toBech32(): string;
    toBytes(): Uint8Array;
    marshalJSON(): Uint8Array;
}
export declare class ValAddress {
    static fromBech32(bech32Addr: string): ValAddress;
    private address;
    constructor(address: Uint8Array | Address);
    toBech32(): string;
    toBytes(): Uint8Array;
    marshalJSON(): Uint8Array;
}
export declare class ConsAddress {
    static fromBech32(bech32Addr: string): ConsAddress;
    private address;
    constructor(address: Uint8Array | Address);
    toBech32(): string;
    toBytes(): Uint8Array;
    marshalJSON(): Uint8Array;
}
