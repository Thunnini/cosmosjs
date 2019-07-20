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
var stdTx_1 = require("./stdTx");
var address_1 = require("./address");
var big_integer_1 = __importDefault(require("big-integer"));
function nullableBnToBI(bn) {
    var result = big_integer_1.default(-1);
    if (bn) {
        if (typeof bn === "string") {
            result = big_integer_1.default(bn);
        }
        else if (typeof bn === "number") {
            result = big_integer_1.default(bn);
        }
        else {
            result = big_integer_1.default(bn);
        }
    }
    return result;
}
exports.stdTxBuilder = function (context, msgs, config) {
    return address_1.useBech32ConfigPromise(context.get("bech32Config"), function () { return __awaiter(_this, void 0, void 0, function () {
        var stdFee, seenSigners, signers, _i, msgs_1, msg, _a, _b, signer, signatures, _c, signers_1, signer, accountNumber, sequence, account, signDoc, sig, pubKey, signature, stdTx;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    stdFee = new stdTx_1.StdFee([config.fee], config.gas);
                    seenSigners = {};
                    signers = [];
                    for (_i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
                        msg = msgs_1[_i];
                        msg.validateBasic();
                        for (_a = 0, _b = msg.getSigners(); _a < _b.length; _a++) {
                            signer = _b[_a];
                            if (!seenSigners[signer.toBytes().toString()]) {
                                signers.push(signer);
                                seenSigners[signer.toBytes().toString()] = true;
                            }
                        }
                    }
                    signatures = [];
                    _c = 0, signers_1 = signers;
                    _d.label = 1;
                case 1:
                    if (!(_c < signers_1.length)) return [3 /*break*/, 7];
                    signer = signers_1[_c];
                    accountNumber = nullableBnToBI(config.accountNumber);
                    sequence = nullableBnToBI(config.sequence);
                    if (!(accountNumber.lt(big_integer_1.default(0)) || sequence.lt(big_integer_1.default(0)))) return [3 /*break*/, 3];
                    return [4 /*yield*/, context.get("queryAccount")(context, signers[0].toBech32())];
                case 2:
                    account = _d.sent();
                    if (accountNumber.lt(big_integer_1.default(0))) {
                        accountNumber = account.getAccountNumber();
                    }
                    if (sequence.lt(big_integer_1.default(0))) {
                        sequence = account.getSequence();
                    }
                    _d.label = 3;
                case 3:
                    signDoc = new stdTx_1.StdSignDoc(accountNumber, context.get("chainId"), stdFee, config.memo, msgs, sequence);
                    return [4 /*yield*/, context
                            .get("walletProvider")
                            .sign(context, signer.toBytes(), signDoc.getSignBytes())];
                case 4:
                    sig = _d.sent();
                    return [4 /*yield*/, context
                            .get("walletProvider")
                            .getPubKey(context, signer.toBytes())];
                case 5:
                    pubKey = _d.sent();
                    signature = new stdTx_1.StdSignature(pubKey, sig);
                    signatures.push(signature);
                    _d.label = 6;
                case 6:
                    _c++;
                    return [3 /*break*/, 1];
                case 7:
                    stdTx = new stdTx_1.StdTx(msgs, stdFee, signatures, config.memo);
                    stdTx.validateBasic();
                    return [2 /*return*/, stdTx];
            }
        });
    }); });
};
//# sourceMappingURL=stdTxBuilder.js.map