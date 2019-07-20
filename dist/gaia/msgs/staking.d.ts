import { Msg } from "../../core/tx";
import { AccAddress, ValAddress } from "../../common/address";
import { Coin } from "../../common/coin";
import { Int } from "../../common/int";
import { Dec } from "../../common/decimal";
import { PubKey } from "../../crypto";
export declare class Description {
    moniker: string;
    identity: string;
    website: string;
    details: string;
    constructor(moniker: string, identity: string, website: string, details: string);
}
export declare class CommissionMsg {
    rate: Dec;
    maxRate: Dec;
    maxChangeRate: Dec;
    constructor(rate: Dec, maxRate: Dec, maxChangeRate: Dec);
}
export declare class MsgCreateValidator extends Msg {
    description: Description;
    commission: CommissionMsg;
    minSelfDelegation: Int;
    delegatorAddress: AccAddress;
    validatorAddress: ValAddress;
    pubKey: PubKey;
    value: Coin;
    constructor(description: Description, commission: CommissionMsg, minSelfDelegation: Int, delegatorAddress: AccAddress, validatorAddress: ValAddress, pubKey: PubKey, value: Coin);
    getSigners(): AccAddress[];
}
export declare class MsgEditValidator extends Msg {
    description: Description;
    validatorAddress: ValAddress;
    commisionRate: Dec;
    minSelfDelegation: Int;
    constructor(description: Description, validatorAddress: ValAddress, commisionRate: Dec, minSelfDelegation: Int);
    getSigners(): AccAddress[];
}
export declare class MsgDelegate extends Msg {
    delegatorAddress: AccAddress;
    validatorAddress: ValAddress;
    amount: Coin;
    constructor(delegatorAddress: AccAddress, validatorAddress: ValAddress, amount: Coin);
    getSigners(): AccAddress[];
}
export declare class MsgBeginRedelegate extends Msg {
    delegatorAddress: AccAddress;
    validatorSrcAddress: ValAddress;
    validatorDstAddress: ValAddress;
    amount: Coin;
    constructor(delegatorAddress: AccAddress, validatorSrcAddress: ValAddress, validatorDstAddress: ValAddress, amount: Coin);
    getSigners(): AccAddress[];
}
export declare class MsgUndelegate extends Msg {
    delegatorAddress: AccAddress;
    validatorAddress: ValAddress;
    amount: Coin;
    constructor(delegatorAddress: AccAddress, validatorAddress: ValAddress, amount: Coin);
    getSigners(): AccAddress[];
}
