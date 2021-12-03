"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var routes_1 = require("./routes");
var server = (0, fastify_1["default"])();
(0, routes_1.Router)(server);
server.listen(8080, function (err, address) {
    if (err) {
        console.error(err);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
    console.log("Server listening at ".concat(address));
});
