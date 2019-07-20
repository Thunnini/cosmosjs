"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = require("buffer/");
var big_integer_1 = __importDefault(require("big-integer"));
var ResultBroadcastTx = /** @class */ (function () {
    function ResultBroadcastTx(mode, code, data, log, hash) {
        this.mode = mode;
        this.code = code;
        this.data = data;
        this.log = log;
        this.hash = hash;
    }
    ResultBroadcastTx.fromJSON = function (obj, mode) {
        var result = obj.result;
        return new ResultBroadcastTx(mode, result.code, buffer_1.Buffer.from(result.data, "hex"), result.log, buffer_1.Buffer.from(result.hash, "hex"));
    };
    return ResultBroadcastTx;
}());
exports.ResultBroadcastTx = ResultBroadcastTx;
var ResultBroadcastTxCommit = /** @class */ (function () {
    function ResultBroadcastTxCommit(mode, checkTx, deliverTx, hash, height) {
        this.mode = mode;
        this.checkTx = checkTx;
        this.deliverTx = deliverTx;
        this.hash = hash;
        this.height = height;
    }
    ResultBroadcastTxCommit.fromJSON = function (obj) {
        var result = obj.result;
        return new ResultBroadcastTxCommit("commit", ResponseCheckTx.fromJSON(result.check_tx), ResponseDeliverTx.fromJSON(result.deliver_tx), buffer_1.Buffer.from(result.hash, "hex"), big_integer_1.default(result.height));
    };
    return ResultBroadcastTxCommit;
}());
exports.ResultBroadcastTxCommit = ResultBroadcastTxCommit;
var ResponseCheckTx = /** @class */ (function () {
    function ResponseCheckTx(code, data, log, info, gasWanted, gasUsed, tags, codespace) {
        this.code = code;
        this.data = data;
        this.log = log;
        this.info = info;
        this.gasWanted = gasWanted;
        this.gasUsed = gasUsed;
        this.tags = tags;
        this.codespace = codespace;
    }
    ResponseCheckTx.fromJSON = function (obj) {
        var tags = [];
        if (obj.tags) {
            for (var _i = 0, _a = obj.tags; _i < _a.length; _i++) {
                var tag = _a[_i];
                tags.push({
                    key: buffer_1.Buffer.from(tag.key, "base64"),
                    value: buffer_1.Buffer.from(tag.value, "base64")
                });
            }
        }
        return new ResponseCheckTx(obj.code, obj.data ? buffer_1.Buffer.from(obj.data, "base64") : buffer_1.Buffer.from([]), obj.log, obj.info, big_integer_1.default(obj.gas_wanted), big_integer_1.default(obj.gas_used), tags, obj.codespace);
    };
    return ResponseCheckTx;
}());
exports.ResponseCheckTx = ResponseCheckTx;
var ResponseDeliverTx = /** @class */ (function () {
    function ResponseDeliverTx(code, data, log, info, gasWanted, gasUsed, tags, codespace) {
        this.code = code;
        this.data = data;
        this.log = log;
        this.info = info;
        this.gasWanted = gasWanted;
        this.gasUsed = gasUsed;
        this.tags = tags;
        this.codespace = codespace;
    }
    ResponseDeliverTx.fromJSON = function (obj) {
        var tags = [];
        if (obj.tags) {
            for (var _i = 0, _a = obj.tags; _i < _a.length; _i++) {
                var tag = _a[_i];
                tags.push({
                    key: buffer_1.Buffer.from(tag.key, "base64"),
                    value: buffer_1.Buffer.from(tag.value, "base64")
                });
            }
        }
        return new ResponseDeliverTx(obj.code, obj.data ? buffer_1.Buffer.from(obj.data, "base64") : buffer_1.Buffer.from([]), obj.log, obj.info, big_integer_1.default(obj.gas_wanted), big_integer_1.default(obj.gas_used), tags, obj.codespace);
    };
    return ResponseDeliverTx;
}());
exports.ResponseDeliverTx = ResponseDeliverTx;
//# sourceMappingURL=tx.js.map