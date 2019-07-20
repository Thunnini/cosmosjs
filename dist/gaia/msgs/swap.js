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
var MsgSwap = /** @class */ (function (_super) {
    __extends(MsgSwap, _super);
    function MsgSwap(sender, asset, targetDenom) {
        var _this = _super.call(this) || this;
        _this.sender = sender;
        _this.asset = asset;
        _this.targetDenon = targetDenom;
        return _this;
    }
    MsgSwap.prototype.getSigners = function () {
        return [this.sender];
    };
    // tslint:disable-next-line: no-empty
    MsgSwap.prototype.validateBasic = function () { };
    __decorate([
        Field.Defined(0, {
            jsonName: "sender"
        })
    ], MsgSwap.prototype, "sender", void 0);
    __decorate([
        Field.Defined(1, {
            jsonName: "asset"
        })
    ], MsgSwap.prototype, "asset", void 0);
    __decorate([
        Field.String(2, {
            jsonName: "target_denom"
        })
    ], MsgSwap.prototype, "targetDenon", void 0);
    MsgSwap = __decorate([
        Concrete("cosmos-sdk/MsgSwap"),
        DefineStruct()
    ], MsgSwap);
    return MsgSwap;
}(tx_1.Msg));
exports.MsgSwap = MsgSwap;
//# sourceMappingURL=swap.js.map