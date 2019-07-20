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
Object.defineProperty(exports, "__esModule", { value: true });
var ts_amino_1 = require("ts-amino");
var Field = ts_amino_1.Amino.Field, Concrete = ts_amino_1.Amino.Concrete, DefineStruct = ts_amino_1.Amino.DefineStruct;
var tx_1 = require("../../core/tx");
var address_1 = require("../../common/address");
var MsgSetWithdrawAddress = /** @class */ (function (_super) {
    __extends(MsgSetWithdrawAddress, _super);
    function MsgSetWithdrawAddress(delegatorAddress, withdrawAddress) {
        var _this = _super.call(this) || this;
        _this.delegatorAddress = delegatorAddress;
        _this.withdrawAddress = withdrawAddress;
        return _this;
    }
    MsgSetWithdrawAddress.prototype.getSigners = function () {
        return [this.delegatorAddress];
    };
    __decorate([
        Field.Defined(0, {
            jsonName: "delegator_address"
        })
    ], MsgSetWithdrawAddress.prototype, "delegatorAddress", void 0);
    __decorate([
        Field.Defined(1, {
            jsonName: "withdraw_address"
        })
    ], MsgSetWithdrawAddress.prototype, "withdrawAddress", void 0);
    MsgSetWithdrawAddress = __decorate([
        Concrete("cosmos-sdk/MsgModifyWithdrawAddress"),
        DefineStruct()
    ], MsgSetWithdrawAddress);
    return MsgSetWithdrawAddress;
}(tx_1.Msg));
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
var MsgWithdrawDelegatorReward = /** @class */ (function (_super) {
    __extends(MsgWithdrawDelegatorReward, _super);
    function MsgWithdrawDelegatorReward(delegatorAddress, validatorAddress) {
        var _this = _super.call(this) || this;
        _this.delegatorAddress = delegatorAddress;
        _this.validatorAddress = validatorAddress;
        return _this;
    }
    MsgWithdrawDelegatorReward.prototype.getSigners = function () {
        return [this.delegatorAddress];
    };
    __decorate([
        Field.Defined(0, {
            jsonName: "delegator_address"
        })
    ], MsgWithdrawDelegatorReward.prototype, "delegatorAddress", void 0);
    __decorate([
        Field.Defined(1, {
            jsonName: "validator_address"
        })
    ], MsgWithdrawDelegatorReward.prototype, "validatorAddress", void 0);
    MsgWithdrawDelegatorReward = __decorate([
        Concrete("cosmos-sdk/MsgWithdrawDelegationReward"),
        DefineStruct()
    ], MsgWithdrawDelegatorReward);
    return MsgWithdrawDelegatorReward;
}(tx_1.Msg));
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
var MsgWithdrawValidatorCommission = /** @class */ (function (_super) {
    __extends(MsgWithdrawValidatorCommission, _super);
    function MsgWithdrawValidatorCommission(validatorAddress) {
        var _this = _super.call(this) || this;
        _this.validatorAddress = validatorAddress;
        return _this;
    }
    MsgWithdrawValidatorCommission.prototype.getSigners = function () {
        return [new address_1.AccAddress(this.validatorAddress.toBytes())];
    };
    __decorate([
        Field.Defined(0, {
            jsonName: "validator_address"
        })
    ], MsgWithdrawValidatorCommission.prototype, "validatorAddress", void 0);
    MsgWithdrawValidatorCommission = __decorate([
        Concrete("cosmos-sdk/MsgWithdrawValidatorCommission"),
        DefineStruct()
    ], MsgWithdrawValidatorCommission);
    return MsgWithdrawValidatorCommission;
}(tx_1.Msg));
exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
//# sourceMappingURL=distribution.js.map