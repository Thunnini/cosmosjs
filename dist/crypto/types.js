"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_amino_1 = require("ts-amino");
var Field = ts_amino_1.Amino.Field, DefineType = ts_amino_1.Amino.DefineType;
var bech32_1 = __importDefault(require("bech32"));
var Address = /** @class */ (function () {
    function Address(address) {
        this.address = address;
    }
    Address_1 = Address;
    Address.fromBech32 = function (prefix, bech32Addr) {
        var _a = bech32_1.default.decode(bech32Addr), b32Prefix = _a.prefix, words = _a.words;
        if (b32Prefix !== prefix) {
            throw new Error("Prefix doesn't match");
        }
        return new Address_1(bech32_1.default.fromWords(words));
    };
    Address.prototype.toBech32 = function (prefix) {
        var words = bech32_1.default.toWords(Buffer.from(this.address));
        return bech32_1.default.encode(prefix, words);
    };
    Address.prototype.toBytes = function () {
        return new Uint8Array(this.address);
    };
    var Address_1;
    __decorate([
        Field.Array(0, { type: ts_amino_1.Type.Uint8 })
    ], Address.prototype, "address", void 0);
    Address = Address_1 = __decorate([
        DefineType()
    ], Address);
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=types.js.map