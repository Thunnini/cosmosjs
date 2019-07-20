"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_amino_1 = require("ts-amino");
var Field = ts_amino_1.Amino.Field, DefineStruct = ts_amino_1.Amino.DefineStruct;
var int_1 = require("./int");
var Coin = /** @class */ (function () {
    function Coin(denom, amount) {
        this.denom = denom;
        this.amount = amount instanceof int_1.Int ? amount : new int_1.Int(amount);
    }
    Coin_1 = Coin;
    Coin.parse = function (str) {
        var re = new RegExp("([0-9]+)[ ]*([a-zA-Z]+)");
        var execed = re.exec(str);
        if (!execed || execed.length !== 3) {
            throw new Error("Invalid coin str");
        }
        var denom = execed[2];
        var amount = execed[1];
        return new Coin_1(denom, amount);
    };
    var Coin_1;
    __decorate([
        Field.String(0)
    ], Coin.prototype, "denom", void 0);
    __decorate([
        Field.Defined(1)
    ], Coin.prototype, "amount", void 0);
    Coin = Coin_1 = __decorate([
        DefineStruct()
    ], Coin);
    return Coin;
}());
exports.Coin = Coin;
//# sourceMappingURL=coin.js.map