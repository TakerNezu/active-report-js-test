"use strict";
exports.__esModule = true;
var edit_json_file_1 = require("edit-json-file");
exports["default"] = (function (server, options, next) {
    server.get('/active-record', {
        handler: function (request, reply) {
            // json file を読み込み
            var data = (0, edit_json_file_1["default"])('../db/db.json');
            reply.send(data);
        }
    });
    server.post('/active-record', {
        // eslint-disable-next-line no-unused-vars
        handler: function (request, reply) {
            // json file を読み込み
            var data = (0, edit_json_file_1["default"])('../db/db.json');
            var req = request.query;
            data.set('taxExemptLocation', req.taxExemptLocation);
        }
    });
    next();
});
