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
// Without Generic
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
// With Generic
// All generic data types are written inside <>
// Inside the <> is the type that was passed
var addIdGeneric = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
// Defining it to be an object
var addIdGenericObject = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user8 = {
    name: 'Jack'
};
var result = addId(user8);
// Implicitly
var result2 = addIdGeneric(user8);
// Explicitly
var result3 = addIdGeneric(user8);
// Whatever we want
var result4 = addIdGeneric("foo");
// Defining it to accept just objects
var result5 = addIdGenericObject(user8);
console.log("result", result);
var user9 = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
var user10 = {
    name: "Roger",
    data: 10
};
var user11 = {
    name: "Kai",
    data: ["Kerin", "Hello"]
};
var user12 = {
    name: "Jack",
    data: ["a", "b", "c"],
    meta: 10
};
// function append<T>(el: T, list: readonly T[]): T[];
// append("baz", ["foo", "bar"]);
// return the list 
