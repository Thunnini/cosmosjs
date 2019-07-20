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
var big_integer_1 = __importDefault(require("big-integer"));
var ts_amino_1 = require("ts-amino");
var Method = ts_amino_1.Amino.Method, DefineStruct = ts_amino_1.Amino.DefineStruct;
var Int = /** @class */ (function () {
    /**
     * @param int - Parse a number | bigInteger | string into a bigInt.
     * Remaing parameters only will be used when type of int is string.
     * @param base - Default base is 10.
     * @param alphabet - Default alphabet is "0123456789abcdefghijklmnopqrstuvwxyz".
     * @param caseSensitive - Defaults to false.
     */
    function Int(int, base, alphabet, caseSensitive) {
        if (typeof int === "string") {
            this.int = big_integer_1.default(int, base, alphabet, caseSensitive);
        }
        else if (typeof int === "number") {
            this.int = big_integer_1.default(int);
        }
        else {
            this.int = big_integer_1.default(int);
        }
    }
    Int_1 = Int;
    Int.prototype.marshalAmino = function () {
        return this.int.toString(10);
    };
    Int.prototype.toString = function () {
        return this.int.toString(10);
    };
    Int.prototype.equals = function (i) {
        return this.int.equals(i.int);
    };
    Int.prototype.gt = function (i) {
        return this.int.gt(i.int);
    };
    Int.prototype.gte = function (i) {
        return this.int.greaterOrEquals(i.int);
    };
    Int.prototype.lt = function (i) {
        return this.int.lt(i.int);
    };
    Int.prototype.lte = function (i) {
        return this.int.lesserOrEquals(i.int);
    };
    Int.prototype.add = function (i) {
        return new Int_1(this.int.add(i.int));
    };
    Int.prototype.sub = function (i) {
        return new Int_1(this.int.subtract(i.int));
    };
    Int.prototype.mul = function (i) {
        return new Int_1(this.int.multiply(i.int));
    };
    Int.prototype.div = function (i) {
        return new Int_1(this.int.divide(i.int));
    };
    Int.prototype.mod = function (i) {
        return new Int_1(this.int.mod(i.int));
    };
    Int.prototype.neg = function () {
        return new Int_1(this.int.negate());
    };
    var Int_1;
    __decorate([
        Method.AminoMarshaler({ type: ts_amino_1.Type.String })
    ], Int.prototype, "marshalAmino", null);
    Int = Int_1 = __decorate([
        DefineStruct()
    ], Int);
    return Int;
}());
exports.Int = Int;
var Uint = /** @class */ (function () {
    /**
     * @param uint - Parse a number | bigInteger | string into a bigUint.
     * Remaing parameters only will be used when type of int is string.
     * @param base - Default base is 10.
     * @param alphabet - Default alphabet is "0123456789abcdefghijklmnopqrstuvwxyz".
     * @param caseSensitive - Defaults to false.
     */
    function Uint(uint, base, alphabet, caseSensitive) {
        if (typeof uint === "string") {
            this.uint = big_integer_1.default(uint, base, alphabet, caseSensitive);
        }
        else if (typeof uint === "number") {
            this.uint = big_integer_1.default(uint);
        }
        else {
            this.uint = big_integer_1.default(uint);
        }
        if (this.uint.isNegative()) {
            throw new TypeError("Uint should not be negative");
        }
    }
    Uint_1 = Uint;
    Uint.prototype.marshalAmino = function () {
        return this.uint.toString(10);
    };
    Uint.prototype.toString = function () {
        return this.uint.toString(10);
    };
    Uint.prototype.equals = function (i) {
        return this.uint.equals(i.uint);
    };
    Uint.prototype.gt = function (i) {
        return this.uint.gt(i.uint);
    };
    Uint.prototype.gte = function (i) {
        return this.uint.greaterOrEquals(i.uint);
    };
    Uint.prototype.lt = function (i) {
        return this.uint.lt(i.uint);
    };
    Uint.prototype.lte = function (i) {
        return this.uint.lesserOrEquals(i.uint);
    };
    Uint.prototype.add = function (i) {
        return new Uint_1(this.uint.add(i.uint));
    };
    Uint.prototype.sub = function (i) {
        return new Uint_1(this.uint.subtract(i.uint));
    };
    Uint.prototype.mul = function (i) {
        return new Uint_1(this.uint.multiply(i.uint));
    };
    Uint.prototype.div = function (i) {
        return new Uint_1(this.uint.divide(i.uint));
    };
    Uint.prototype.mod = function (i) {
        return new Uint_1(this.uint.mod(i.uint));
    };
    var Uint_1;
    __decorate([
        Method.AminoMarshaler({ type: ts_amino_1.Type.String })
    ], Uint.prototype, "marshalAmino", null);
    Uint = Uint_1 = __decorate([
        DefineStruct()
    ], Uint);
    return Uint;
}());
exports.Uint = Uint;
//# sourceMappingURL=int.js.map