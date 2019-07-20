import { Msg } from "../../core/tx";
import { AccAddress, ValAddress } from "../../common/address";
export declare class MsgUnjail extends Msg {
    validatorAddr: ValAddress;
    constructor(validatorAddr: ValAddress);
    getSigners(): AccAddress[];
}
