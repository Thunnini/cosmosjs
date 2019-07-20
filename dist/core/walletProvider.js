"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("../common/address");
var key_1 = require("../utils/key");
/**
 * Using the this in the browser is not secure and should only be used for development purposes.
 * Use a secure vault outside of the context of the webpage to ensure security when signing transactions in production.
 */
var LocalWalletProvider = /** @class */ (function () {
    function LocalWalletProvider(mnemonic, rng) {
        if (mnemonic === void 0) { mnemonic = ""; }
        this.mnemonic = mnemonic;
        this.rng = rng;
        if (this.mnemonic === "") {
            this.mnemonic = LocalWalletProvider.generateMnemonic(this.rng);
        }
    }
    LocalWalletProvider.generateMnemonic = function (rng) {
        if (!rng) {
            throw new Error("You should set rng to generate seed");
        }
        return key_1.generateSeed(rng);
    };
    LocalWalletProvider.getPrivKeyFromMnemonic = function (bip44, mnemonic, index, change) {
        return key_1.generateWalletFromMnemonic(mnemonic, bip44.pathString(index, change));
    };
    LocalWalletProvider.prototype.signIn = function (context, index, change) {
        if (change === void 0) { change = 0; }
        this.privKey = LocalWalletProvider.getPrivKeyFromMnemonic(context.get("bip44"), this.mnemonic, index, change);
        return Promise.resolve();
    };
    LocalWalletProvider.prototype.getPubKey = function (context, address) {
        if (!this.privKey) {
            throw new Error("Not signed in");
        }
        var pubKey = this.privKey.toPubKey();
        var addressFromPubKey = pubKey.toAddress().toBytes();
        if (address.toString() !== addressFromPubKey.toString()) {
            throw new Error("Unknown address");
        }
        return Promise.resolve(pubKey);
    };
    LocalWalletProvider.prototype.getSignerAccounts = function (context) {
        if (!this.privKey) {
            throw new Error("Not signed in");
        }
        var pubKey = this.privKey.toPubKey();
        var address = pubKey.toAddress().toBytes();
        return Promise.resolve([
            {
                address: address,
                pubKey: pubKey
            }
        ]);
    };
    LocalWalletProvider.prototype.sign = function (context, address, message) {
        if (!this.privKey) {
            throw new Error("Not signed in");
        }
        var pubKey = this.privKey.toPubKey();
        var addressFromPubKey = pubKey.toAddress().toBytes();
        if (address.toString() !== addressFromPubKey.toString()) {
            address_1.useBech32Config(context.get("bech32Config"), function () {
                throw new Error("Unknown address: " + new address_1.AccAddress(address).toBech32());
            });
        }
        return Promise.resolve(this.privKey.sign(message));
    };
    return LocalWalletProvider;
}());
exports.LocalWalletProvider = LocalWalletProvider;
//# sourceMappingURL=walletProvider.js.map