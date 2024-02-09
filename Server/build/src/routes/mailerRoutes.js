"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendEmailHandler_1 = require("../handlers/sendEmailHandler");
const mailRouter = (0, express_1.Router)();
mailRouter.post('/', sendEmailHandler_1.sendEmailHandler);
exports.default = mailRouter;
//# sourceMappingURL=mailerRoutes.js.map