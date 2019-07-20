"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// tslint:disable-next-line:no-implicit-dependencies
require("mocha");
var Key = __importStar(require("./key"));
var crypto_1 = __importDefault(require("crypto"));
describe("Test wallet", function () {
    it("generate key and mnemonic", function () {
        var _a = Key.generateWallet(function (array) {
            return crypto_1.default.randomBytes(array.length);
        }), privKey = _a.privKey, mnemonic = _a.mnemonic;
        assert_1.default.equal(mnemonic.split(" ").length, 24, "should generate 24 words by default");
        var recoveredPrivKey = Key.generateWalletFromMnemonic(mnemonic);
        assert_1.default.equal(recoveredPrivKey.toString(), privKey.toString());
        assert_1.default.equal(recoveredPrivKey.toPubKey().toString(), privKey.toPubKey().toString());
        assert_1.default.equal(recoveredPrivKey
            .toPubKey()
            .toAddress()
            .toBech32("cosmos"), privKey
            .toPubKey()
            .toAddress()
            .toBech32("cosmos"));
    });
    it("recover key from mnemonic", function () {
        var privKey = Key.generateWalletFromMnemonic("anger river nuclear pig enlist fish demand dress library obtain concert nasty wolf episode ring bargain rely off vibrant iron cram witness extra enforce", "m/44'/118'/0'/0/0");
        assert_1.default.equal(privKey
            .toPubKey()
            .toAddress()
            .toBech32("cosmos"), "cosmos1t68n2ezn5zt8frh4jehmufkk2puakv9glapyz4");
    });
});
//# sourceMappingURL=key.spec.js.map