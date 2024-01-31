import { Router } from "express";

import {
  postUserHandler,
  postProyectsHandler,
  postExperienceHandler,
  postSkillsHandler,
  postSocialHandler,
  postStudiesHandler,
} from "../handlers/postHandlers";

const postRouter = Router();

postRouter.post("/persona", postUserHandler);
postRouter.post("/proyects", postProyectsHandler);
postRouter.post("/experience", postExperienceHandler);
postRouter.post("/skill", postSkillsHandler);
postRouter.post("/social", postSocialHandler);
postRouter.post("/studies", postStudiesHandler);

export default postRouter;
