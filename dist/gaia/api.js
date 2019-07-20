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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../core/api");
var rest_1 = require("./rest");
var stdTx_1 = require("../common/stdTx");
var stdTxBuilder_1 = require("../common/stdTxBuilder");
var bip44_1 = require("../core/bip44");
var bech32Config_1 = require("../core/bech32Config");
var GaiaApi = /** @class */ (function (_super) {
    __extends(GaiaApi, _super);
    function GaiaApi(config, coreConfig) {
        if (coreConfig === void 0) { coreConfig = {}; }
        var _this = _super.call(this, config, __assign({
            txEncoder: stdTx_1.defaultTxEncoder,
            txBuilder: stdTxBuilder_1.stdTxBuilder,
            restFactory: function (context) {
                return new rest_1.GaiaRest(context);
            },
            queryAccount: function (context, address) {
                return _this.rest.getAccount(address);
            },
            bech32Config: bech32Config_1.defaultBech32Config("cosmos"),
            bip44: new bip44_1.BIP44(44, 118, 0)
        }, coreConfig)) || this;
        return _this;
    }
    return GaiaApi;
}(api_1.Api));
exports.GaiaApi = GaiaApi;
//# sourceMappingURL=api.js.map