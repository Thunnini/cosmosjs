"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortJSON(json) {
    var obj = JSON.parse(json);
    if (obj && typeof obj === "object") {
        if (!Array.isArray(obj)) {
            var result = "{";
            var keys = Object.keys(obj).sort();
            var writeComma = false;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (writeComma) {
                    result += ",";
                    writeComma = false;
                }
                result += "\"" + key + "\":";
                result += sortJSON(JSON.stringify(obj[key]));
                writeComma = true;
            }
            result += "}";
            return result;
        }
        else {
            var result = "[";
            var writeComma = false;
            for (var _a = 0, obj_1 = obj; _a < obj_1.length; _a++) {
                var o = obj_1[_a];
                if (writeComma) {
                    result += ",";
                    writeComma = false;
                }
                result += sortJSON(JSON.stringify(o));
                writeComma = true;
            }
            result += "]";
            return result;
        }
    }
    return json;
}
exports.sortJSON = sortJSON;
//# sourceMappingURL=sortJson.js.map