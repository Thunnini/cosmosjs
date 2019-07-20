"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// tslint:disable-next-line:no-implicit-dependencies
require("mocha");
var sortJson_1 = require("./sortJson");
describe("Test std tx", function () {
    it("test json is sorted by alphabetically", function () {
        var obj = {
            b: {
                b: "b",
                a: "a",
                c: "c"
            },
            a: {
                e: ["a", "b"],
                f: {
                    c: "c",
                    b: "b"
                }
            }
        };
        assert_1.default.equal(sortJson_1.sortJSON(JSON.stringify(obj)), "{\"a\":{\"e\":[\"a\",\"b\"],\"f\":{\"b\":\"b\",\"c\":\"c\"}},\"b\":{\"a\":\"a\",\"b\":\"b\",\"c\":\"c\"}}");
    });
});
//# sourceMappingURL=sortJson.spec.js.map