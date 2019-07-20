"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var ts_amino_1 = require("ts-amino");
var Field = ts_amino_1.Amino.Field, DefineType = ts_amino_1.Amino.DefineType;
var bech32_1 = __importDefault(require("bech32"));
var crypto_1 = require("../crypto");
var buffer_1 = require("buffer/");
var bech32Config;
var globalBech32Config;
var bech32ConfigStack = [];
function useGlobalBech32Config(config) {
    globalBech32Config = config;
    if (bech32ConfigStack.length === 0) {
        bech32Config = config;
    }
}
exports.useGlobalBech32Config = useGlobalBech32Config;
/**
 * If bech32config is just global variable, it make conflicts when you use mutiple chain api in an application.
 * So, to overcome this, each config should be used in separated way.
 * Use Bech32 encoding, decoding within this function.
 * But if you just use only one chain api in general way, you can use [[useGlobalBech32Config]] for convenience
 */
function useBech32Config(config, fn) {
    bech32ConfigStack.push(config);
    bech32Config = config;
    var result = fn();
    bech32ConfigStack.pop();
    bech32Config =
        bech32ConfigStack.length > 0
            ? bech32ConfigStack[bech32ConfigStack.length - 1]
            : globalBech32Config;
    return result;
}
exports.useBech32Config = useBech32Config;
function useBech32ConfigPromise(config, fn) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bech32ConfigStack.push(config);
                    bech32Config = config;
                    return [4 /*yield*/, fn()];
                case 1:
                    result = _a.sent();
                    bech32ConfigStack.pop();
                    bech32Config =
                        bech32ConfigStack.length > 0
                            ? bech32ConfigStack[bech32ConfigStack.length - 1]
                            : globalBech32Config;
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.useBech32ConfigPromise = useBech32ConfigPromise;
var AccAddress = /** @class */ (function () {
    function AccAddress(address) {
        this.address = address instanceof crypto_1.Address ? address.toBytes() : address;
    }
    AccAddress_1 = AccAddress;
    AccAddress.fromBech32 = function (bech32Addr) {
        if (!bech32Config) {
            throw new Error("bech32 config is null");
        }
        var _a = bech32_1.default.decode(bech32Addr), b32Prefix = _a.prefix, words = _a.words;
        if (b32Prefix !== bech32Config.bech32PrefixAccAddr) {
            throw new Error("Prefix doesn't match");
        }
        return new AccAddress_1(bech32_1.default.fromWords(words));
    };
    AccAddress.prototype.toBech32 = function () {
        if (!bech32Config) {
            throw new Error("bech32 config is null");
        }
        var words = bech32_1.default.toWords(buffer_1.Buffer.from(this.address));
        return bech32_1.default.encode(bech32Config.bech32PrefixAccAddr, words);
    };
    AccAddress.prototype.toBytes = function () {
        return new Uint8Array(this.address);
    };
    AccAddress.prototype.marshalJSON = function () {
        return buffer_1.Buffer.from("\"" + this.toBech32() + "\"", "utf8");
    };
    var AccAddress_1;
    __decorate([
        Field.Array(0, { type: ts_amino_1.Type.Uint8 })
    ], AccAddress.prototype, "address", void 0);
    AccAddress = AccAddress_1 = __decorate([
        DefineType()
    ], AccAddress);
    return AccAddress;
}());
exports.AccAddress = AccAddress;
var ValAddress = /** @class */ (function () {
    function ValAddress(address) {
        this.address = address instanceof crypto_1.Address ? address.toBytes() : address;
    }
    ValAddress_1 = ValAddress;
    ValAddress.fromBech32 = function (bech32Addr) {
        if (!bech32Config) {
            throw new Error("bech32 config is null");
        }
        var _a = bech32_1.default.decode(bech32Addr), b32Prefix = _a.prefix, words = _a.words;
        if (b32Prefix !== bech32Config.bech32PrefixValAddr) {
            throw new Error("Prefix doesn't match");
        }
        return new ValAddress_1(bech32_1.default.fromWords(words));
    };
    ValAddress.prototype.toBech32 = function () {
        if (!bech32Config) {
            throw new Error("bech32 config is null");
        }
        var words = bech32_1.default.toWords(buffer_1.Buffer.from(this.address));
        return bech32_1.default.encode(bech32Config.bech32PrefixValAddr, words);
    };
    ValAddress.prototype.toBytes = function () {
        return new Uint8Array(this.address);
    };
    ValAddress.prototype.marshalJSON = function () {
        return buffer_1.Buffer.from("\"" + this.toBech32() + "\"", "utf8");
    };
    var ValAddress_1;
    __decorate([
        Field.Array(0, { type: ts_amino_1.Type.Uint8 })
    ], ValAddress.prototype, "address", void 0);
    ValAddress = ValAddress_1 = __decorate([
        DefineType()
    ], ValAddress);
    return ValAddress;
}());
exports.ValAddress = ValAddress;
var ConsAddress = /** @class */ (function () {
    function ConsAddress(address) {
        this.address = address instanceof crypto_1.Address ? address.toBytes() : address;
    }
    ConsAddress_1 = ConsAddress;
    ConsAddress.fromBech32 = function (bech32Addr) {
        if (!bech32Config) {
            throw new Error("bech32 config is null");
        }
        var _a = bech32_1.default.decode(bech32Addr), b32Prefix = _a.prefix, words = _a.words;
        if (b32Prefix !== bech32Config.bech32PrefixConsAddr) {
            throw new Error("Prefix doesn't match");
        }
        return new ConsAddress_1(bech32_1.default.fromWords(words));
    };
    ConsAddress.prototype.toBech32 = function () {
        if (!bech32Config) {
            throw new Error("bech32 config is null");
        }
        var words = bech32_1.default.toWords(buffer_1.Buffer.from(this.address));
        return bech32_1.default.encode(bech32Config.bech32PrefixConsAddr, words);
    };
    ConsAddress.prototype.toBytes = function () {
        return new Uint8Array(this.address);
    };
    ConsAddress.prototype.marshalJSON = function () {
        return buffer_1.Buffer.from("\"" + this.toBech32() + "\"", "utf8");
    };
    var ConsAddress_1;
    __decorate([
        Field.Array(0, { type: ts_amino_1.Type.Uint8 })
    ], ConsAddress.prototype, "address", void 0);
    ConsAddress = ConsAddress_1 = __decorate([
        DefineType()
    ], ConsAddress);
    return ConsAddress;
}());
exports.ConsAddress = ConsAddress;
//# sourceMappingURL=address.js.map