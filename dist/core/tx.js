"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_amino_1 = require("ts-amino");
var marshalJson = ts_amino_1.Amino.marshalJson;
var buffer_1 = require("buffer/");
var sortJson_1 = require("../utils/sortJson");
var Msg = /** @class */ (function () {
    function Msg() {
    }
    /**
     * ValidateBasic does a simple validation check that
     * doesn't require access to any other information.
     * You can throw error in this when msg is invalid.
     */
    // tslint:disable-next-line: no-empty
    Msg.prototype.validateBasic = function () { };
    /**
     * Get the canonical byte representation of the Msg.
     * @return Return sorted by alphabetically amino encoded json by default.
     */
    Msg.prototype.getSignBytes = function () {
        return buffer_1.Buffer.from(sortJson_1.sortJSON(marshalJson(this)), "utf8");
    };
    Msg.prototype.getSigners = function () {
        throw new Error("You should implement getSigners()");
    };
    return Msg;
}());
exports.Msg = Msg;
//# sourceMappingURL=tx.js.map