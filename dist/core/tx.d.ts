import { AccAddress } from "../common/address";
export interface Tx {
    getMsgs(): Msg[];
    /**
     * ValidateBasic does a simple validation check that
     * doesn't require access to any other information.
     * You can throw error in this when tx is invalid.
     */
    validateBasic(): void;
}
export declare class Msg {
    /**
     * ValidateBasic does a simple validation check that
     * doesn't require access to any other information.
     * You can throw error in this when msg is invalid.
     */
    validateBasic(): void;
    /**
     * Get the canonical byte representation of the Msg.
     * @return Return sorted by alphabetically amino encoded json by default.
     */
    getSignBytes(): Uint8Array;
    getSigners(): AccAddress[];
}
export declare type TxEncoder = (tx: Tx) => Uint8Array;
