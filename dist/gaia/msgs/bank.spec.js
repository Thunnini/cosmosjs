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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// import assert from "assert";
// tslint:disable-next-line:no-implicit-dependencies
require("mocha");
var api_1 = require("../api");
var walletProvider_1 = require("../../core/walletProvider");
var bank_1 = require("./bank");
var address_1 = require("../../common/address");
var coin_1 = require("../../common/coin");
var int_1 = require("../../common/int");
var big_integer_1 = __importDefault(require("big-integer"));
describe("Test bank msg", function () {
    it("", function () { return __awaiter(_this, void 0, void 0, function () {
        var wallet, api, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = new walletProvider_1.LocalWalletProvider("anger river nuclear pig enlist fish demand dress library obtain concert nasty wolf episode ring bargain rely off vibrant iron cram witness extra enforce");
                    api = new api_1.GaiaApi({
                        chainId: "cosmoshub-2",
                        walletProvider: wallet,
                        rpc: "http://35.245.26.237:26657",
                        rest: "http://localhost:1317"
                    });
                    address_1.useGlobalBech32Config(api.context.get("bech32Config"));
                    return [4 /*yield*/, api.signIn(0)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, api.sendMsgs([
                            new bank_1.MsgSend(address_1.AccAddress.fromBech32("cosmos1t68n2ezn5zt8frh4jehmufkk2puakv9glapyz4"), address_1.AccAddress.fromBech32("cosmos1t68n2ezn5zt8frh4jehmufkk2puakv9glapyz4"), [new coin_1.Coin("uatom", new int_1.Int("1"))]),
                            new bank_1.MsgSend(address_1.AccAddress.fromBech32("cosmos1t68n2ezn5zt8frh4jehmufkk2puakv9glapyz4"), address_1.AccAddress.fromBech32("cosmos1t68n2ezn5zt8frh4jehmufkk2puakv9glapyz4"), [new coin_1.Coin("uatom", new int_1.Int("1"))])
                        ], {
                            gas: big_integer_1.default(60000),
                            gasAdjustment: 1,
                            memo: "",
                            fee: new coin_1.Coin("uatom", new int_1.Int("111")),
                            gasPrice: 1
                        }, "commit")];
                case 2:
                    result = _a.sent();
                    // tslint:disable-next-line: no-console
                    console.log(result);
                    address_1.useGlobalBech32Config(undefined);
                    return [2 /*return*/];
            }
        });
    }); }).timeout(30000);
});
//# sourceMappingURL=bank.spec.js.map