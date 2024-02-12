"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getHandlers_1 = require("../handlers/getHandlers");
const getRouter = (0, express_1.Router)();
getRouter.get('/persona', getHandlers_1.getUserHandler);
getRouter.get('/proyects', getHandlers_1.getProyectsHandler);
getRouter.get('/experiences', getHandlers_1.getExperienceHandler);
getRouter.get('/skill', getHandlers_1.getSkillsHandler);
getRouter.get('/social', getHandlers_1.getSocialHandler);
getRouter.get('/studies', getHandlers_1.getStudiesHandler);
exports.default = getRouter;
//# sourceMappingURL=getRoutes.js.map