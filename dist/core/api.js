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
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("./context");
var axios_1 = __importDefault(require("axios"));
var address_1 = require("../common/address");
var tendermint_1 = require("../rpc/tendermint");
var Api = /** @class */ (function () {
    function Api(config, coreConfig) {
        this._context = new context_1.Context({
            chainId: config.chainId,
            txEncoder: coreConfig.txEncoder,
            txBuilder: coreConfig.txBuilder,
            bech32Config: coreConfig.bech32Config,
            walletProvider: config.walletProvider,
            rpcInstance: axios_1.default.create({
                baseURL: config.rpc
            }),
            restInstance: axios_1.default.create({
                baseURL: config.rest
            }),
            queryAccount: coreConfig.queryAccount,
            bip44: coreConfig.bip44
        });
        this._rpc = new tendermint_1.TendermintRPC(this.context);
        this._rest = coreConfig.restFactory(this.context);
        if (!config.disableGlobalBech32Config) {
            address_1.useGlobalBech32Config(coreConfig.bech32Config);
        }
    }
    Api.prototype.signIn = function (index, change) {
        if (change === void 0) { change = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wallet.signIn(this.context, index, change)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    /**
     * Send msgs.
     * @return If mode is commit, this will return [[ResultBroadcastTx]].
     * Or if mode is sync or async, this will return [[ResultBroadcastTxCommit]].
     */
    Api.prototype.sendMsgs = function (msgs, config, mode) {
        if (mode === void 0) { mode = "sync"; }
        return __awaiter(this, void 0, void 0, function () {
            var tx, bz;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.get("txBuilder")(this.context, msgs, config)];
                    case 1:
                        tx = _a.sent();
                        bz = this.context.get("txEncoder")(tx);
                        if (mode === "commit") {
                            return [2 /*return*/, this.rpc.broadcastTxCommit(bz)];
                        }
                        else {
                            return [2 /*return*/, this.rpc.broadcastTx(bz, mode)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Api.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "wallet", {
        get: function () {
            return this.context.get("walletProvider");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "rpc", {
        get: function () {
            return this._rpc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "rest", {
        get: function () {
            return this._rest;
        },
        enumerable: true,
        configurable: true
    });
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=api.js.map