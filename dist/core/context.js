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
var ImmutableContext = /** @class */ (function () {
    function ImmutableContext(context) {
        this.context = context;
    }
    ImmutableContext.prototype.get = function (key) {
        return this.context[key];
    };
    ImmutableContext.prototype.set = function (key, value) {
        var _a;
        return new ImmutableContext(__assign({}, this.context, (_a = {}, _a[key] = value, _a)));
    };
    return ImmutableContext;
}());
exports.ImmutableContext = ImmutableContext;
var Context = /** @class */ (function (_super) {
    __extends(Context, _super);
    function Context() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Context;
}(ImmutableContext));
exports.Context = Context;
//# sourceMappingURL=context.js.map