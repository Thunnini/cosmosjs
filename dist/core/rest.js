"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rest = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function Rest(_context) {
        this._context = _context;
        this._instance = _context.get("restInstance");
    }
    Object.defineProperty(Rest.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rest.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Rest;
}());
exports.Rest = Rest;
//# sourceMappingURL=rest.js.map