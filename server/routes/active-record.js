"use strict";
exports.__esModule = true;
var db_1 = require("../db");
exports["default"] = (function (server, options, next) {
    server.get('/active-record', {
        handler: function (request, reply) {
            // json file を読み込み
            reply.send(db_1.jsonData);
        }
    });
    server.post('/active-record', {
        // eslint-disable-next-line no-unused-vars
        handler: function (request, reply) {
            // json file を読み込み
            var req = request.query;
            console.log(request.query);
            (0, db_1.dataSet)('taxExemptLocation', req.taxExemptLocation);
            reply.send('ok');
        }
    });
    next();
});
