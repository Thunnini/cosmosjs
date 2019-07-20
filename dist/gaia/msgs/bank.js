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
var int_1 = require("../../common/int");
var MsgSend = /** @class */ (function (_super) {
    __extends(MsgSend, _super);
    function MsgSend(fromAddress, toAddress, amount) {
        var _this = _super.call(this) || this;
        _this.fromAddress = fromAddress;
        _this.toAddress = toAddress;
        _this.amount = amount;
        return _this;
    }
    MsgSend.prototype.getSigners = function () {
        return [this.fromAddress];
    };
    MsgSend.prototype.validateBasic = function () {
        for (var _i = 0, _a = this.amount; _i < _a.length; _i++) {
            var coin = _a[_i];
            if (coin.amount.lte(new int_1.Int(0))) {
                throw new Error("Send amount is invalid");
            }
        }
    };
    __decorate([
        Field.Defined(0, {
            jsonName: "from_address"
        })
    ], MsgSend.prototype, "fromAddress", void 0);
    __decorate([
        Field.Defined(1, {
            jsonName: "to_address"
        })
    ], MsgSend.prototype, "toAddress", void 0);
    __decorate([
        Field.Slice(2, { type: ts_amino_1.Type.Defined }, {
            jsonName: "amount"
        })
    ], MsgSend.prototype, "amount", void 0);
    MsgSend = __decorate([
        Concrete("cosmos-sdk/MsgSend"),
        DefineStruct()
    ], MsgSend);
    return MsgSend;
}(tx_1.Msg));
exports.MsgSend = MsgSend;
//# sourceMappingURL=bank.js.map