"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RPC = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function RPC(_context) {
        this._context = _context;
        this._instance = _context.get("rpcInstance");
    }
    Object.defineProperty(RPC.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RPC.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return RPC;
}());
exports.RPC = RPC;
//# sourceMappingURL=rpc.js.map