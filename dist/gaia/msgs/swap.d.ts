import { Msg } from "../../core/tx";
import { AccAddress } from "../../common/address";
import { Coin } from "../../common/coin";
export declare class MsgSwap extends Msg {
    sender: AccAddress;
    asset: Coin;
    targetDenon: string;
    constructor(sender: AccAddress, asset: Coin, targetDenom: string);
    getSigners(): AccAddress[];
    validateBasic(): void;
}
