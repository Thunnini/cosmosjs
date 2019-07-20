import { Msg } from "../../core/tx";
import { AccAddress } from "../../common/address";
import { Coin } from "../../common/coin";
export declare class MsgSend extends Msg {
    fromAddress: AccAddress;
    toAddress: AccAddress;
    amount: Coin[];
    constructor(fromAddress: AccAddress, toAddress: AccAddress, amount: Coin[]);
    getSigners(): AccAddress[];
    validateBasic(): void;
}
