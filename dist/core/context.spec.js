"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// tslint:disable-next-line:no-implicit-dependencies
require("mocha");
var context_1 = require("./context");
describe("Test context", function () {
    it("context should be immutable", function () {
        var context = new context_1.ImmutableContext({
            test: "test1"
        });
        var newContext = context.set("test", "test2");
        assert_1.default.equal(context.get("test"), "test1");
        assert_1.default.equal(newContext.get("test"), "test2");
        assert_1.default.notEqual(context, newContext);
    });
});
//# sourceMappingURL=context.spec.js.map