"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var big_integer_1 = __importDefault(require("big-integer"));
var buffer_1 = require("buffer/");
var ResultABCIInfo = /** @class */ (function () {
    function ResultABCIInfo(response) {
        this.response = response;
    }
    ResultABCIInfo.fromJSON = function (obj) {
        return new ResultABCIInfo(ABCIResponseInfo.fromJSON(obj.result.response));
    };
    return ResultABCIInfo;
}());
exports.ResultABCIInfo = ResultABCIInfo;
var ABCIResponseInfo = /** @class */ (function () {
    function ABCIResponseInfo(data, version, appVersion, lastBlockHeight, lastBlockAppHash) {
        this.data = data;
        this.version = version;
        this.appVersion = appVersion;
        this.lastBlockHeight = lastBlockHeight;
        this.lastBlockAppHash = lastBlockAppHash;
    }
    ABCIResponseInfo.fromJSON = function (obj) {
        return new ABCIResponseInfo(obj.data, obj.version, obj.app_version, obj.last_block_height, obj.last_block_app_hash);
    };
    return ABCIResponseInfo;
}());
exports.ABCIResponseInfo = ABCIResponseInfo;
var ResultABCIQuery = /** @class */ (function () {
    function ResultABCIQuery(response) {
        this.response = response;
    }
    ResultABCIQuery.fromJSON = function (obj) {
        return new ResultABCIQuery(ABCIResponseQuery.fromJSON(obj.result.response));
    };
    return ResultABCIQuery;
}());
exports.ResultABCIQuery = ResultABCIQuery;
var ABCIResponseQuery = /** @class */ (function () {
    // TODO: add code, proofs and so on...
    function ABCIResponseQuery(key, value, height) {
        this.key = key;
        this.value = value;
        this.height = height;
    }
    ABCIResponseQuery.fromJSON = function (obj) {
        return new ABCIResponseQuery(buffer_1.Buffer.from(obj.key, "base64"), buffer_1.Buffer.from(obj.value, "base64"), big_integer_1.default(obj.height));
    };
    return ABCIResponseQuery;
}());
exports.ABCIResponseQuery = ABCIResponseQuery;
//# sourceMappingURL=abci.js.map