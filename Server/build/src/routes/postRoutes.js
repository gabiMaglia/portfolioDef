"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postHandlers_1 = require("../handlers/postHandlers");
const postRouter = (0, express_1.Router)();
postRouter.post("/persona", postHandlers_1.postUserHandler);
postRouter.post("/proyect", postHandlers_1.postProyectsHandler);
postRouter.post("/experience", postHandlers_1.postExperienceHandler);
postRouter.post("/skill", postHandlers_1.postSkillsHandler);
postRouter.post("/social", postHandlers_1.postSocialHandler);
postRouter.post("/studies", postHandlers_1.postStudiesHandler);
exports.default = postRouter;
//# sourceMappingURL=postRoutes.js.map