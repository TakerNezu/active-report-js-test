"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var result = (0, dotenv_1.config)();
if (result.error) {
    throw result.error;
}
var fastify_1 = require("fastify");
var fastify_cors_1 = require("fastify-cors");
var routes_1 = require("./routes");
var server = (0, fastify_1["default"])({ logger: true });
(0, routes_1.Router)(server);
server.register(fastify_cors_1["default"]); //全許可のため本番ではオプション指定必須
server.listen(8080, function (err, address) {
    if (err) {
        console.error(err);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
    console.log("Server listening at ".concat(address));
});
