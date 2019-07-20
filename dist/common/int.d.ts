import bigInteger from "big-integer";
export declare class Int {
    private int;
    /**
     * @param int - Parse a number | bigInteger | string into a bigInt.
     * Remaing parameters only will be used when type of int is string.
     * @param base - Default base is 10.
     * @param alphabet - Default alphabet is "0123456789abcdefghijklmnopqrstuvwxyz".
     * @param caseSensitive - Defaults to false.
     */
    constructor(int: bigInteger.BigNumber, base?: bigInteger.BigNumber, alphabet?: string, caseSensitive?: boolean);
    marshalAmino(): string;
    toString(): string;
    equals(i: Int): boolean;
    gt(i: Int): boolean;
    gte(i: Int): boolean;
    lt(i: Int): boolean;
    lte(i: Int): boolean;
    add(i: Int): Int;
    sub(i: Int): Int;
    mul(i: Int): Int;
    div(i: Int): Int;
    mod(i: Int): Int;
    neg(): Int;
}
export declare class Uint {
    private uint;
    /**
     * @param uint - Parse a number | bigInteger | string into a bigUint.
     * Remaing parameters only will be used when type of int is string.
     * @param base - Default base is 10.
     * @param alphabet - Default alphabet is "0123456789abcdefghijklmnopqrstuvwxyz".
     * @param caseSensitive - Defaults to false.
     */
    constructor(uint: bigInteger.BigNumber, base?: bigInteger.BigNumber, alphabet?: string, caseSensitive?: boolean);
    marshalAmino(): string;
    toString(): string;
    equals(i: Uint): boolean;
    gt(i: Uint): boolean;
    gte(i: Uint): boolean;
    lt(i: Uint): boolean;
    lte(i: Uint): boolean;
    add(i: Uint): Uint;
    sub(i: Uint): Uint;
    mul(i: Uint): Uint;
    div(i: Uint): Uint;
    mod(i: Uint): Uint;
}
