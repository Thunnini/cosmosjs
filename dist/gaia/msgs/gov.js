"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_amino_1 = require("ts-amino");
var Field = ts_amino_1.Amino.Field, Concrete = ts_amino_1.Amino.Concrete, DefineStruct = ts_amino_1.Amino.DefineStruct, DefineType = ts_amino_1.Amino.DefineType;
var tx_1 = require("../../core/tx");
var int_1 = require("../../common/int");
var big_integer_1 = __importDefault(require("big-integer"));
var ProposalKind = /** @class */ (function () {
    function ProposalKind(kind) {
        this._kind = kind;
    }
    Object.defineProperty(ProposalKind, "nil", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProposalKind, "text", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProposalKind, "parameterChange", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProposalKind, "softwareUpgread", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    ProposalKind.prototype.validateBasic = function () {
        if (this.kind < 0 || this.kind > 3) {
            throw new Error("Invalid proposal kind: " + this.kind);
        }
    };
    Object.defineProperty(ProposalKind.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Field.Uint8(0)
    ], ProposalKind.prototype, "_kind", void 0);
    ProposalKind = __decorate([
        DefineType()
    ], ProposalKind);
    return ProposalKind;
}());
exports.ProposalKind = ProposalKind;
var VoteOption = /** @class */ (function () {
    function VoteOption(option) {
        this._option = option;
    }
    Object.defineProperty(VoteOption, "empty", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VoteOption, "yes", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VoteOption, "abstain", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VoteOption, "no", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VoteOption, "noWithVeto", {
        get: function () {
            return 4;
        },
        enumerable: true,
        configurable: true
    });
    VoteOption.prototype.validateBasic = function () {
        if (this.option < 0 || this.option > 4) {
            throw new Error("Invalid proposal kind: " + this.option);
        }
    };
    Object.defineProperty(VoteOption.prototype, "option", {
        get: function () {
            return this._option;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Field.Uint8(0)
    ], VoteOption.prototype, "_option", void 0);
    VoteOption = __decorate([
        DefineType()
    ], VoteOption);
    return VoteOption;
}());
exports.VoteOption = VoteOption;
var MsgSubmitProposal = /** @class */ (function (_super) {
    __extends(MsgSubmitProposal, _super);
    function MsgSubmitProposal(title, description, proposalType, proposer, initialDeposit) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.description = description;
        _this.proposalType = proposalType;
        _this.proposer = proposer;
        _this.initialDeposit = initialDeposit;
        return _this;
    }
    MsgSubmitProposal.prototype.getSigners = function () {
        return [this.proposer];
    };
    MsgSubmitProposal.prototype.validateBasic = function () {
        this.proposalType.validateBasic();
    };
    __decorate([
        Field.String(0, {
            jsonName: "title"
        })
    ], MsgSubmitProposal.prototype, "title", void 0);
    __decorate([
        Field.String(1, {
            jsonName: "description"
        })
    ], MsgSubmitProposal.prototype, "description", void 0);
    __decorate([
        Field.Defined(2, {
            jsonName: "proposal_type"
        })
    ], MsgSubmitProposal.prototype, "proposalType", void 0);
    __decorate([
        Field.Defined(3, {
            jsonName: "proposer"
        })
    ], MsgSubmitProposal.prototype, "proposer", void 0);
    __decorate([
        Field.Slice(4, {
            type: ts_amino_1.Type.Defined
        }, {
            jsonName: "initial_deposit"
        })
    ], MsgSubmitProposal.prototype, "initialDeposit", void 0);
    MsgSubmitProposal = __decorate([
        Concrete("cosmos-sdk/MsgSubmitProposal"),
        DefineStruct()
    ], MsgSubmitProposal);
    return MsgSubmitProposal;
}(tx_1.Msg));
exports.MsgSubmitProposal = MsgSubmitProposal;
var MsgDeposit = /** @class */ (function (_super) {
    __extends(MsgDeposit, _super);
    function MsgDeposit(proposalId, depositor, amount) {
        var _this = _super.call(this) || this;
        if (typeof proposalId === "string") {
            _this.proposalId = big_integer_1.default(proposalId);
        }
        else if (typeof proposalId === "number") {
            _this.proposalId = big_integer_1.default(proposalId);
        }
        else {
            _this.proposalId = big_integer_1.default(proposalId);
        }
        _this.depositor = depositor;
        _this.amount = amount;
        return _this;
    }
    MsgDeposit.prototype.getSigners = function () {
        return [this.depositor];
    };
    MsgDeposit.prototype.validateBasic = function () {
        for (var _i = 0, _a = this.amount; _i < _a.length; _i++) {
            var coin = _a[_i];
            if (coin.amount.lte(new int_1.Int(0))) {
                throw new Error("Deposit amount is invalid");
            }
        }
    };
    __decorate([
        Field.Uint64(0, {
            jsonName: "proposal_id"
        })
    ], MsgDeposit.prototype, "proposalId", void 0);
    __decorate([
        Field.Defined(1, {
            jsonName: "depositor"
        })
    ], MsgDeposit.prototype, "depositor", void 0);
    __decorate([
        Field.Slice(2, { type: ts_amino_1.Type.Defined }, {
            jsonName: "amount"
        })
    ], MsgDeposit.prototype, "amount", void 0);
    MsgDeposit = __decorate([
        Concrete("cosmos-sdk/MsgDeposit"),
        DefineStruct()
    ], MsgDeposit);
    return MsgDeposit;
}(tx_1.Msg));
exports.MsgDeposit = MsgDeposit;
var MsgVote = /** @class */ (function (_super) {
    __extends(MsgVote, _super);
    function MsgVote(proposalId, voter, option) {
        var _this = _super.call(this) || this;
        if (typeof proposalId === "string") {
            _this.proposalId = big_integer_1.default(proposalId);
        }
        else if (typeof proposalId === "number") {
            _this.proposalId = big_integer_1.default(proposalId);
        }
        else {
            _this.proposalId = big_integer_1.default(proposalId);
        }
        _this.voter = voter;
        _this.option = option;
        return _this;
    }
    MsgVote.prototype.getSigners = function () {
        return [this.voter];
    };
    MsgVote.prototype.validateBasic = function () {
        this.option.validateBasic();
    };
    __decorate([
        Field.Uint64(0, {
            jsonName: "proposal_id"
        })
    ], MsgVote.prototype, "proposalId", void 0);
    __decorate([
        Field.Defined(1, {
            jsonName: "voter"
        })
    ], MsgVote.prototype, "voter", void 0);
    __decorate([
        Field.Defined(2, {
            jsonName: "option"
        })
    ], MsgVote.prototype, "option", void 0);
    MsgVote = __decorate([
        Concrete("cosmos-sdk/MsgVote"),
        DefineStruct()
    ], MsgVote);
    return MsgVote;
}(tx_1.Msg));
exports.MsgVote = MsgVote;
//# sourceMappingURL=gov.js.map