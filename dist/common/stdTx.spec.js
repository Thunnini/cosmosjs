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
var assert_1 = __importDefault(require("assert"));
// tslint:disable-next-line:no-implicit-dependencies
require("mocha");
var buffer_1 = require("buffer/");
var coin_1 = require("./coin");
var int_1 = require("./int");
var stdTx_1 = require("./stdTx");
var tx_1 = require("../core/tx");
var address_1 = require("../common/address");
var bech32Config_1 = require("../core/bech32Config");
var ts_amino_1 = require("ts-amino");
var Field = ts_amino_1.Amino.Field, Concrete = ts_amino_1.Amino.Concrete, DefineStruct = ts_amino_1.Amino.DefineStruct;
var MsgTest = /** @class */ (function (_super) {
    __extends(MsgTest, _super);
    function MsgTest(address) {
        var _this = _super.call(this) || this;
        _this.address = new address_1.AccAddress(address);
        return _this;
    }
    __decorate([
        Field.Defined()
    ], MsgTest.prototype, "address", void 0);
    MsgTest = __decorate([
        Concrete("test/MsgTest"),
        DefineStruct()
    ], MsgTest);
    return MsgTest;
}(tx_1.Msg));
describe("Test std tx", function () {
    it("std sign doc should generate corrent sign doc", function () {
        address_1.useBech32Config(bech32Config_1.defaultBech32Config("cosmos"), function () {
            var signDoc = new stdTx_1.StdSignDoc(1, "test", new stdTx_1.StdFee([new coin_1.Coin("test", new int_1.Int(10))], 1000), "test", [
                new MsgTest(buffer_1.Buffer.from("5e8f356453a096748ef5966fbe26d65079db30a8", "hex"))
            ], 10);
            assert_1.default.equal(signDoc.getSignBytes().toString(), "{\"account_number\":\"1\",\"chain_id\":\"test\",\"fee\":{\"amount\":[{\"amount\":\"10\",\"denom\":\"test\"}],\"gas\":\"1000\"},\"memo\":\"test\",\"msgs\":[{\"type\":\"test/MsgTest\",\"value\":{\"address\":\"cosmos1t68n2ezn5zt8frh4jehmufkk2puakv9glapyz4\"}}],\"sequence\":\"10\"}");
        });
    });
});
//# sourceMappingURL=stdTx.spec.js.map