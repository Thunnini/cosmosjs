"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("../crypto");
var address_1 = require("../common/address");
var buffer_1 = require("buffer/");
// tslint:disable: no-var-requires
var TransportWebUSB = require("@ledgerhq/hw-transport-webusb").default;
var TransportU2F = require("@ledgerhq/hw-transport-u2f").default;
var TransportHID = require("@ledgerhq/hw-transport-node-hid").default;
var CosmosApp = require("ledger-cosmos-js").default;
// tslint:enable: no-var-requires
/**
 * This wallet provider provides a basic client interface to communicate with a Tendermint/Cosmos App running in a Ledger Nano S/X
 * Note: WebUSB support requires Cosmos app >= 1.5.3
 */
var LedgerWalletProvider = /** @class */ (function () {
    function LedgerWalletProvider(transport) {
        this.transport = transport;
    }
    LedgerWalletProvider.prototype.signIn = function (context, index, change) {
        if (change === void 0) { change = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var transport, _a, response;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.transport;
                        switch (_a) {
                            case "WebUSB": return [3 /*break*/, 1];
                            case "U2F": return [3 /*break*/, 3];
                            case "HID": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, TransportWebUSB.create()];
                    case 2:
                        transport = _b.sent();
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, TransportU2F.create()];
                    case 4:
                        transport = _b.sent();
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, TransportHID.create()];
                    case 6:
                        transport = _b.sent();
                        return [3 /*break*/, 8];
                    case 7: throw new Error("Unsupported transport");
                    case 8:
                        this.app = new CosmosApp(transport);
                        return [4 /*yield*/, this.app.getVersion()];
                    case 9:
                        response = _b.sent();
                        if (response.error_message !== "No errors") {
                            throw new Error("[" + response.error_message + "] " + response.error_message);
                        }
                        // tslint:disable: no-console
                        console.log("Response received!");
                        console.log("App Version " + response.major + "." + response.minor + "." + response.patch);
                        console.log("Device Locked: " + response.device_locked);
                        console.log("Test mode: " + response.test_mode);
                        console.log("Full response:");
                        console.log(response);
                        // tslint:enable: no-console
                        this.path = context.get("bip44").path(index, change);
                        return [4 /*yield*/, this.app.getAddressAndPubKey(this.path, context.get("bech32Config").bech32PrefixAccAddr)];
                    case 10:
                        response = _b.sent();
                        if (response.error_message !== "No errors") {
                            throw new Error("[" + response.error_message + "] " + response.error_message);
                        }
                        address_1.useBech32Config(context.get("bech32Config"), function () {
                            _this.account = {
                                address: address_1.AccAddress.fromBech32(response.bech32_address).toBytes(),
                                pubKey: new crypto_1.PubKeySecp256k1(response.compressed_pk)
                            };
                        });
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    LedgerWalletProvider.prototype.getPubKey = function (context, address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.app || !this.path || !this.account) {
                    throw new Error("Not signed in");
                }
                return [2 /*return*/, Promise.resolve(this.account.pubKey)];
            });
        });
    };
    LedgerWalletProvider.prototype.getSignerAccounts = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.app || !this.path || !this.account) {
                    throw new Error("Not signed in");
                }
                return [2 /*return*/, Promise.resolve([this.account])];
            });
        });
    };
    LedgerWalletProvider.prototype.sign = function (context, address, message) {
        return __awaiter(this, void 0, void 0, function () {
            var addrAndPubKey, response, signature, rOffset, rLen, sLen, sOffset, sigR, sigS;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.app || !this.path) {
                            throw new Error("Not signed in");
                        }
                        return [4 /*yield*/, this.getSignerAccounts(context)];
                    case 1:
                        addrAndPubKey = (_a.sent())[0];
                        if (addrAndPubKey.address.toString() !== address.toString()) {
                            address_1.useBech32Config(context.get("bech32Config"), function () {
                                throw new Error("Unknown address: " + new address_1.AccAddress(address).toBech32());
                            });
                        }
                        return [4 /*yield*/, this.app.sign(this.path, message)];
                    case 2:
                        response = _a.sent();
                        if (response.error_message !== "No errors") {
                            throw new Error("[" + response.error_message + "] " + response.error_message);
                        }
                        signature = response.signature;
                        if (signature[0] !== 0x30) {
                            throw new Error("Ledger assertion failed: Expected a signature header of 0x30");
                        }
                        rOffset = 4;
                        rLen = signature[3];
                        sLen = signature[4 + rLen + 1];
                        sOffset = signature.length - sLen;
                        // we can safely ignore the first byte in the 33 bytes cases
                        if (rLen === 33) {
                            rOffset++; // chop off 0x00 padding
                            rLen--;
                        }
                        if (sLen === 33) {
                            sOffset++;
                        } // as above
                        sigR = signature.slice(rOffset, rOffset + rLen);
                        sigS = signature.slice(sOffset);
                        signature = buffer_1.Buffer.concat([sigR, sigS]);
                        if (signature.length !== 64) {
                            throw new Error("Ledger assertion failed: incorrect signature length " + signature.length);
                        }
                        return [2 /*return*/, Promise.resolve(signature)];
                }
            });
        });
    };
    return LedgerWalletProvider;
}());
exports.LedgerWalletProvider = LedgerWalletProvider;
//# sourceMappingURL=ledgerWallet.js.map