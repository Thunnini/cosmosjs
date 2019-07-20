import { PrivKey } from "../crypto";
export declare type RNG = <T extends Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T) => T;
export declare function generateWallet(rng: RNG, path?: string, password?: string, strength?: number): {
    privKey: PrivKey;
    mnemonic: string;
};
export declare function generateWalletFromMnemonic(mnemonic: string, path?: string, password?: string): PrivKey;
export declare function generateSeed(rng: RNG, strength?: number): string;
