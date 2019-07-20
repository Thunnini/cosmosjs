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
var rpc_1 = require("../core/rpc");
var buffer_1 = require("buffer/");
var big_integer_1 = __importDefault(require("big-integer"));
var status_1 = require("./status");
var abci_1 = require("./abci");
var tx_1 = require("./tx");
var TendermintRPC = /** @class */ (function (_super) {
    __extends(TendermintRPC, _super);
    function TendermintRPC(context) {
        return _super.call(this, context) || this;
    }
    TendermintRPC.prototype.status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.instance.get("/status")];
                    case 1:
                        result = _a.sent();
                        if (result.data.error) {
                            error = result.data.error;
                            throw new Error("code: " + error.code + ",  message: " + error.message + ", data: " + error.data);
                        }
                        return [2 /*return*/, status_1.ResultStatus.fromJSON(result.data)];
                }
            });
        });
    };
    TendermintRPC.prototype.abciInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.instance.get("/abci_info")];
                    case 1:
                        result = _a.sent();
                        if (result.data.error) {
                            error = result.data.error;
                            throw new Error("code: " + error.code + ",  message: " + error.message + ", data: " + error.data);
                        }
                        return [2 /*return*/, abci_1.ResultABCIInfo.fromJSON(result.data)];
                }
            });
        });
    };
    TendermintRPC.prototype.abciQuery = function (path, data, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var height, prove, bz, result, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        height = opts ? big_integer_1.default(opts.height) : big_integer_1.default(0);
                        prove = opts ? opts.prove : false;
                        if (typeof data === "string") {
                            bz =
                                data.indexOf("0x") === 0
                                    ? buffer_1.Buffer.from(data.replace("0x", ""), "hex")
                                    : buffer_1.Buffer.from(data);
                        }
                        else {
                            bz = buffer_1.Buffer.from(data);
                        }
                        return [4 /*yield*/, this.instance.get("/abci_query?path=\"" + path + "&data=0x" + bz.toString("hex") + "&prove=" + prove + "&height=" + height.toString() + "\"")];
                    case 1:
                        result = _a.sent();
                        if (result.data.error) {
                            error = result.data.error;
                            throw new Error("code: " + error.code + ",  message: " + error.message + ", data: " + error.data);
                        }
                        return [2 /*return*/, abci_1.ResultABCIQuery.fromJSON(result.data)];
                }
            });
        });
    };
    TendermintRPC.prototype.broadcastTx = function (tx, mode) {
        return __awaiter(this, void 0, void 0, function () {
            var hex, result, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hex = buffer_1.Buffer.from(tx).toString("hex");
                        return [4 /*yield*/, this.instance.get("/broadcast_tx_" + mode, {
                                params: {
                                    tx: "0x" + hex
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        if (result.data.error) {
                            error = result.data.error;
                            throw new Error("code: " + error.code + ",  message: " + error.message + ", data: " + error.data);
                        }
                        return [2 /*return*/, tx_1.ResultBroadcastTx.fromJSON(result.data, mode)];
                }
            });
        });
    };
    TendermintRPC.prototype.broadcastTxCommit = function (tx) {
        return __awaiter(this, void 0, void 0, function () {
            var hex, result, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hex = buffer_1.Buffer.from(tx).toString("hex");
                        return [4 /*yield*/, this.instance.get("/broadcast_tx_commit", {
                                params: {
                                    tx: "0x" + hex
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        if (result.data.error) {
                            error = result.data.error;
                            throw new Error("code: " + error.code + ",  message: " + error.message + ", data: " + error.data);
                        }
                        return [2 /*return*/, tx_1.ResultBroadcastTxCommit.fromJSON(result.data)];
                }
            });
        });
    };
    return TendermintRPC;
}(rpc_1.RPC));
exports.TendermintRPC = TendermintRPC;
//# sourceMappingURL=tendermint.js.map