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
var MsgUnjail = /** @class */ (function (_super) {
    __extends(MsgUnjail, _super);
    function MsgUnjail(validatorAddr) {
        var _this = _super.call(this) || this;
        _this.validatorAddr = validatorAddr;
        return _this;
    }
    MsgUnjail.prototype.getSigners = function () {
        return [new address_1.AccAddress(this.validatorAddr.toBytes())];
    };
    __decorate([
        Field.Defined(0, {
            jsonName: "address"
        })
    ], MsgUnjail.prototype, "validatorAddr", void 0);
    MsgUnjail = __decorate([
        Concrete("cosmos-sdk/MsgUnjail"),
        DefineStruct()
    ], MsgUnjail);
    return MsgUnjail;
}(tx_1.Msg));
exports.MsgUnjail = MsgUnjail;
//# sourceMappingURL=slashing.js.map