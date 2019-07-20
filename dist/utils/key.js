"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var bip39 = require("bip39");
// tslint:disable-next-line:no-var-requires
var bip32 = require("bip32");
var buffer_1 = require("buffer/");
var crypto_1 = require("../crypto");
function generateWallet(rng, path, password, strength) {
    if (path === void 0) { path = "m/44'/118'/0'/0/0"; }
    if (password === void 0) { password = ""; }
    if (strength === void 0) { strength = 256; }
    var mnemonic = generateSeed(rng, strength);
    var privKey = generateWalletFromMnemonic(mnemonic, path, password);
    return {
        privKey: privKey,
        mnemonic: mnemonic
    };
}
exports.generateWallet = generateWallet;
function generateWalletFromMnemonic(mnemonic, path, password) {
    // bip39.validateMnemonic(mnemonic);
    if (path === void 0) { path = "m/44'/118'/0'/0/0"; }
    if (password === void 0) { password = ""; }
    var seed = bip39.mnemonicToSeedSync(mnemonic, password);
    var masterKey = bip32.fromSeed(seed);
    var hd = masterKey.derivePath(path);
    var privateKey = hd.privateKey;
    if (!privateKey) {
        throw new Error("null hd key");
    }
    return new crypto_1.PrivKeySecp256k1(privateKey);
}
exports.generateWalletFromMnemonic = generateWalletFromMnemonic;
function generateSeed(rng, strength) {
    if (strength === void 0) { strength = 128; }
    if (strength % 32 !== 0) {
        throw new TypeError("invalid entropy");
    }
    var bytes = new Uint8Array(strength / 8);
    bytes = rng(bytes);
    return bip39.entropyToMnemonic(buffer_1.Buffer.from(bytes).toString("hex"));
}
exports.generateSeed = generateSeed;
//# sourceMappingURL=key.js.map