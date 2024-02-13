"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainRoutes_1 = require("./routes/mainRoutes");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
server.use(express_1.default.json());
server.use('/', mainRoutes_1.default);
server.use(function (err, _req, res, _next) {
    var status = err.status || 500;
    var message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
exports.default = server;
