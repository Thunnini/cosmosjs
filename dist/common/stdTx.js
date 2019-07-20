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
var Field = ts_amino_1.Amino.Field, Concrete = ts_amino_1.Amino.Concrete, DefineStruct = ts_amino_1.Amino.DefineStruct, DefineType = ts_amino_1.Amino.DefineType, marshalBinaryLengthPrefixed = ts_amino_1.Amino.marshalBinaryLengthPrefixed, marshalJson = ts_amino_1.Amino.marshalJson;
var big_integer_1 = __importDefault(require("big-integer"));
var buffer_1 = require("buffer/");
var sortJson_1 = require("../utils/sortJson");
var StdTx = /** @class */ (function () {
    function StdTx(msgs, fee, signatures, memo) {
        if (memo === void 0) { memo = ""; }
        this.msgs = msgs;
        this.fee = fee;
        this.signatures = signatures;
        this.memo = memo;
    }
    StdTx.prototype.getMsgs = function () {
        return this.msgs;
    };
    StdTx.prototype.validateBasic = function () {
        for (var _i = 0, _a = this.msgs; _i < _a.length; _i++) {
            var msg = _a[_i];
            msg.validateBasic();
        }
    };
    __decorate([
        Field.Slice(0, { type: ts_amino_1.Type.Interface }, { jsonName: "msg" })
    ], StdTx.prototype, "msgs", void 0);
    __decorate([
        Field.Defined(1)
    ], StdTx.prototype, "fee", void 0);
    __decorate([
        Field.Slice(2, { type: ts_amino_1.Type.Defined })
    ], StdTx.prototype, "signatures", void 0);
    __decorate([
        Field.String(3)
    ], StdTx.prototype, "memo", void 0);
    StdTx = __decorate([
        Concrete("auth/StdTx"),
        DefineStruct()
    ], StdTx);
    return StdTx;
}());
exports.StdTx = StdTx;
var defaultTxEncoder = function (tx) {
    return marshalBinaryLengthPrefixed(tx);
};
exports.defaultTxEncoder = defaultTxEncoder;
var StdFee = /** @class */ (function () {
    function StdFee(amount, gas) {
        this.amount = amount;
        if (typeof gas === "string") {
            this.gas = big_integer_1.default(gas, 10);
        }
        else if (typeof gas === "number") {
            this.gas = big_integer_1.default(gas);
        }
        else {
            this.gas = big_integer_1.default(gas);
        }
    }
    __decorate([
        Field.Slice(0, { type: ts_amino_1.Type.Defined })
    ], StdFee.prototype, "amount", void 0);
    __decorate([
        Field.Uint64(1)
    ], StdFee.prototype, "gas", void 0);
    StdFee = __decorate([
        DefineStruct()
    ], StdFee);
    return StdFee;
}());
exports.StdFee = StdFee;
var RawMessage = /** @class */ (function () {
    function RawMessage(raw) {
        this.raw = raw;
    }
    RawMessage.prototype.marshalJSON = function () {
        return buffer_1.Buffer.from(this.raw).toString("utf8");
    };
    __decorate([
        Field.Slice(0, { type: ts_amino_1.Type.Uint8 })
    ], RawMessage.prototype, "raw", void 0);
    RawMessage = __decorate([
        DefineType()
    ], RawMessage);
    return RawMessage;
}());
var StdSignDoc = /** @class */ (function () {
    function StdSignDoc(accountNumber, chainId, fee, memo, msgs, sequence) {
        if (typeof accountNumber === "string") {
            this.accountNumber = big_integer_1.default(accountNumber, 10);
        }
        else if (typeof accountNumber === "number") {
            this.accountNumber = big_integer_1.default(accountNumber);
        }
        else {
            this.accountNumber = big_integer_1.default(accountNumber);
        }
        this.chainId = chainId;
        this.feeRaw = new RawMessage(buffer_1.Buffer.from(marshalJson(fee), "utf8"));
        this.memo = memo;
        this.msgsRaws = [];
        for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
            var msg = msgs_1[_i];
            this.msgsRaws.push(new RawMessage(msg.getSignBytes()));
        }
        if (typeof sequence === "string") {
            this.sequence = big_integer_1.default(sequence, 10);
        }
        else if (typeof sequence === "number") {
            this.sequence = big_integer_1.default(sequence);
        }
        else {
            this.sequence = big_integer_1.default(sequence);
        }
    }
    StdSignDoc.prototype.getSignBytes = function () {
        return buffer_1.Buffer.from(sortJson_1.sortJSON(marshalJson(this)), "utf8");
    };
    __decorate([
        Field.Uint64(0, { jsonName: "account_number" })
    ], StdSignDoc.prototype, "accountNumber", void 0);
    __decorate([
        Field.String(1, { jsonName: "chain_id" })
    ], StdSignDoc.prototype, "chainId", void 0);
    __decorate([
        Field.Slice(2, { type: ts_amino_1.Type.Defined }, { jsonName: "fee" })
    ], StdSignDoc.prototype, "feeRaw", void 0);
    __decorate([
        Field.String(3)
    ], StdSignDoc.prototype, "memo", void 0);
    __decorate([
        Field.Slice(4, { type: ts_amino_1.Type.Defined }, { jsonName: "msgs" })
    ], StdSignDoc.prototype, "msgsRaws", void 0);
    __decorate([
        Field.Uint64()
    ], StdSignDoc.prototype, "sequence", void 0);
    StdSignDoc = __decorate([
        DefineStruct()
    ], StdSignDoc);
    return StdSignDoc;
}());
exports.StdSignDoc = StdSignDoc;
var StdSignature = /** @class */ (function () {
    function StdSignature(pubKey, signature) {
        this.pubKey = pubKey;
        this.signature = signature;
    }
    __decorate([
        Field.Interface(0, { jsonName: "pub_key" })
    ], StdSignature.prototype, "pubKey", void 0);
    __decorate([
        Field.Slice(1, { type: ts_amino_1.Type.Uint8 })
    ], StdSignature.prototype, "signature", void 0);
    StdSignature = __decorate([
        DefineStruct()
    ], StdSignature);
    return StdSignature;
}());
exports.StdSignature = StdSignature;
//# sourceMappingURL=stdTx.js.map