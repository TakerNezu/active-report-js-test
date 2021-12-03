"use strict";
exports.__esModule = true;
exports.Router = void 0;
var active_record_1 = require("./active-record");
function Router(server) {
    server.register(active_record_1["default"]);
}
exports.Router = Router;
