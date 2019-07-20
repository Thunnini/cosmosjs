import { Msg } from "../../core/tx";
import { AccAddress } from "../../common/address";
import { Coin } from "../../common/coin";
import bigInteger from "big-integer";
export declare class ProposalKind {
    static readonly nil: number;
    static readonly text: number;
    static readonly parameterChange: number;
    static readonly softwareUpgread: number;
    private _kind;
    constructor(kind: 0 | 1 | 2 | 3);
    validateBasic(): void;
    readonly kind: number;
}
export declare class VoteOption {
    static readonly empty: number;
    static readonly yes: number;
    static readonly abstain: number;
    static readonly no: number;
    static readonly noWithVeto: number;
    private _option;
    constructor(option: 0 | 1 | 2 | 3 | 4);
    validateBasic(): void;
    readonly option: number;
}
export declare class MsgSubmitProposal extends Msg {
    title: string;
    description: string;
    proposalType: ProposalKind;
    proposer: AccAddress;
    initialDeposit: Coin[];
    constructor(title: string, description: string, proposalType: ProposalKind, proposer: AccAddress, initialDeposit: Coin[]);
    getSigners(): AccAddress[];
    validateBasic(): void;
}
export declare class MsgDeposit extends Msg {
    proposalId: bigInteger.BigInteger;
    depositor: AccAddress;
    amount: Coin[];
    constructor(proposalId: bigInteger.BigNumber, depositor: AccAddress, amount: Coin[]);
    getSigners(): AccAddress[];
    validateBasic(): void;
}
export declare class MsgVote extends Msg {
    proposalId: bigInteger.BigInteger;
    voter: AccAddress;
    option: VoteOption;
    constructor(proposalId: bigInteger.BigNumber, voter: AccAddress, option: VoteOption);
    getSigners(): AccAddress[];
    validateBasic(): void;
}
