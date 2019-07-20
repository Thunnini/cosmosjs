"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// tslint:disable-next-line:no-implicit-dependencies
require("mocha");
var coin_1 = require("./coin");
describe("Test coin", function () {
    it("coin parsed from str properly", function () {
        var coin = coin_1.Coin.parse("1000test");
        assert_1.default.equal(coin.denom, "test");
        assert_1.default.equal(coin.amount.toString(), "1000");
        coin = coin_1.Coin.parse("1000tesT");
        assert_1.default.equal(coin.denom, "tesT");
        assert_1.default.equal(coin.amount.toString(), "1000");
        coin = coin_1.Coin.parse("1000TEST");
        assert_1.default.equal(coin.denom, "TEST");
        assert_1.default.equal(coin.amount.toString(), "1000");
    });
});
//# sourceMappingURL=coin.spec.js.map