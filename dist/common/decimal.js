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
var int_1 = require("./int");
var Method = ts_amino_1.Amino.Method, DefineStruct = ts_amino_1.Amino.DefineStruct;
var Dec = /** @class */ (function () {
    /**
     * Create a new Dec from integer with decimal place at prec
     * @param int - Parse a number | bigInteger | string into a Dec.
     * If int is string and contains dot(.), prec is ignored and automatically calculated.
     * @param prec - Precision
     */
    function Dec(int, prec) {
        if (prec === void 0) { prec = 0; }
        if (typeof int === "string") {
            if (int.indexOf(".") >= 0) {
                prec = int.length - int.indexOf(".") - 1;
                int = int.replace(".", "");
            }
            this.int = big_integer_1.default(int);
        }
        else if (typeof int === "number") {
            this.int = big_integer_1.default(int);
        }
        else if (int instanceof int_1.Int) {
            this.int = big_integer_1.default(int.toString());
        }
        else {
            this.int = big_integer_1.default(int);
        }
        this.int = this.int.multiply(Dec_1.calcPrecisionMultiplier(big_integer_1.default(prec)));
    }
    Dec_1 = Dec;
    Dec.calcPrecisionMultiplier = function (prec) {
        if (prec.lt(big_integer_1.default(0))) {
            throw new Error("Invalid prec");
        }
        if (prec.gt(Dec_1.precision)) {
            throw new Error("Too much precision");
        }
        if (Dec_1.precisionMultipliers[prec.toString()]) {
            return Dec_1.precisionMultipliers[prec.toString()];
        }
        var zerosToAdd = Dec_1.precision.minus(prec);
        var multiplier = big_integer_1.default(10).pow(zerosToAdd);
        Dec_1.precisionMultipliers[prec.toString()] = multiplier;
        return multiplier;
    };
    Dec.prototype.marshalAmino = function () {
        return this.int.toString(10);
    };
    Dec.prototype.marshalJSON = function () {
        return "\"" + this.int.toString(10) + "\"";
    };
    var Dec_1;
    Dec.precision = big_integer_1.default(18);
    __decorate([
        Method.AminoMarshaler({ type: ts_amino_1.Type.String })
    ], Dec.prototype, "marshalAmino", null);
    Dec = Dec_1 = __decorate([
        DefineStruct()
    ], Dec);
    return Dec;
}());
exports.Dec = Dec;
//# sourceMappingURL=decimal.js.map