"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sendEmailHandler_1 = require("../handlers/sendEmailHandler");
var mailRouter = (0, express_1.Router)();
mailRouter.post('/', sendEmailHandler_1.sendEmailHandler);
exports.default = mailRouter;
