"use strict";
exports.__esModule = true;
exports.dataSet = exports.jsonData = void 0;
var fs = require("fs");
var fileContent = fs.readFileSync(__dirname + "/db.json", "utf8");
exports.jsonData = JSON.parse(fileContent);
function dataSet(key, value) {
    var _a;
    var preText;
    if (exports.jsonData.hasOwnProperty(key)) {
        var propertyKey = key;
        // 既存のJsonDataが既にキーを持っている場合は、
        exports.jsonData[propertyKey] = value;
        preText = exports.jsonData;
    }
    else {
        preText = (_a = {}, _a[key] = value, _a);
    }
    var text = JSON.stringify(preText);
    fs.writeFileSync(__dirname + './db.json', text);
}
exports.dataSet = dataSet;
