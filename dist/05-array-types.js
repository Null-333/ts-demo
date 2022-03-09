"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = [1, 2, 3];
var b = [1, 2, 3];
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (curr, prev) { return curr + prev; }, 0);
}
sum(1, 2, 3);
//# sourceMappingURL=05-array-types.js.map