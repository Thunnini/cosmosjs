import { Msg } from "../../core/tx";
import { AccAddress, ValAddress } from "../../common/address";
export declare class MsgSetWithdrawAddress extends Msg {
    delegatorAddress: AccAddress;
    withdrawAddress: AccAddress;
    constructor(delegatorAddress: AccAddress, withdrawAddress: AccAddress);
    getSigners(): AccAddress[];
}
export declare class MsgWithdrawDelegatorReward extends Msg {
    delegatorAddress: AccAddress;
    validatorAddress: ValAddress;
    constructor(delegatorAddress: AccAddress, validatorAddress: ValAddress);
    getSigners(): AccAddress[];
}
export declare class MsgWithdrawValidatorCommission extends Msg {
    validatorAddress: ValAddress;
    constructor(validatorAddress: ValAddress);
    getSigners(): AccAddress[];
}
