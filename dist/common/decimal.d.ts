import bigInteger from "big-integer";
import { Int } from "./int";
export declare class Dec {
    static readonly precision: bigInteger.BigInteger;
    private static readonly precisionMultipliers;
    private static calcPrecisionMultiplier;
    private int;
    /**
     * Create a new Dec from integer with decimal place at prec
     * @param int - Parse a number | bigInteger | string into a Dec.
     * If int is string and contains dot(.), prec is ignored and automatically calculated.
     * @param prec - Precision
     */
    constructor(int: bigInteger.BigNumber | Int, prec?: number);
    marshalAmino(): string;
    marshalJSON(): string;
}
