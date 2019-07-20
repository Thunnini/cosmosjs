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
var Field = ts_amino_1.Amino.Field, DefineType = ts_amino_1.Amino.DefineType, Concrete = ts_amino_1.Amino.Concrete, marshalBinaryBare = ts_amino_1.Amino.marshalBinaryBare;
var buffer_1 = require("buffer/");
var ripemd160_1 = __importDefault(require("ripemd160"));
var secp256k1_1 = __importDefault(require("secp256k1"));
var sha_js_1 = require("sha.js");
var types_1 = require("./types");
var PrivKeySecp256k1 = /** @class */ (function () {
    function PrivKeySecp256k1(privKey) {
        this.privKey = privKey;
    }
    PrivKeySecp256k1.prototype.toBytes = function () {
        return marshalBinaryBare(this);
    };
    PrivKeySecp256k1.prototype.toPubKey = function () {
        var pubKey = secp256k1_1.default.publicKeyCreate(buffer_1.Buffer.from(this.privKey), true);
        return new PubKeySecp256k1(pubKey);
    };
    PrivKeySecp256k1.prototype.equals = function (privKey) {
        return this.toBytes().toString() === privKey.toBytes().toString();
    };
    PrivKeySecp256k1.prototype.sign = function (msg) {
        return secp256k1_1.default.sign(buffer_1.Buffer.from(new sha_js_1.sha256().update(msg).digest()), buffer_1.Buffer.from(this.privKey)).signature;
    };
    PrivKeySecp256k1.prototype.toString = function () {
        return buffer_1.Buffer.from(this.privKey).toString("hex");
    };
    __decorate([
        Field.Array(0, { type: ts_amino_1.Type.Uint8 })
    ], PrivKeySecp256k1.prototype, "privKey", void 0);
    PrivKeySecp256k1 = __decorate([
        Concrete("tendermint/PrivKeySecp256k1"),
        DefineType()
    ], PrivKeySecp256k1);
    return PrivKeySecp256k1;
}());
exports.PrivKeySecp256k1 = PrivKeySecp256k1;
var PubKeySecp256k1 = /** @class */ (function () {
    function PubKeySecp256k1(pubKey) {
        this.pubKey = pubKey;
    }
    PubKeySecp256k1.prototype.toBytes = function () {
        return marshalBinaryBare(this);
    };
    PubKeySecp256k1.prototype.toAddress = function () {
        var hash = new sha_js_1.sha256().update(this.pubKey).digest("latin1");
        hash = new ripemd160_1.default().update(hash, "latin1").digest("hex");
        return new types_1.Address(buffer_1.Buffer.from(hash, "hex"));
    };
    PubKeySecp256k1.prototype.equals = function (pubKey) {
        return this.toBytes().toString() === pubKey.toBytes().toString();
    };
    PubKeySecp256k1.prototype.verify = function (msg, sig) {
        return secp256k1_1.default.verify(buffer_1.Buffer.from(msg), buffer_1.Buffer.from(sig), buffer_1.Buffer.from(this.pubKey));
    };
    PubKeySecp256k1.prototype.toString = function () {
        return buffer_1.Buffer.from(this.pubKey).toString("hex");
    };
    __decorate([
        Field.Array(0, { type: ts_amino_1.Type.Uint8 })
    ], PubKeySecp256k1.prototype, "pubKey", void 0);
    PubKeySecp256k1 = __decorate([
        Concrete("tendermint/PubKeySecp256k1"),
        DefineType()
    ], PubKeySecp256k1);
    return PubKeySecp256k1;
}());
exports.PubKeySecp256k1 = PubKeySecp256k1;
//# sourceMappingURL=secp256k1.js.map