const { Router } =  require ("express")

const {
  postUserHandler,
  postProyectsHandler,
  postExperienceHandler,
  postSkillsHandler,
  postSocialHandler,
  postStudiesHandler,
} = require ("../handlers/postHandlers");

const postRouter = Router();

postRouter.post("/persona", postUserHandler);
postRouter.post("/proyect", postProyectsHandler);
postRouter.post("/experience", postExperienceHandler);
postRouter.post("/skill", postSkillsHandler);
postRouter.post("/social", postSocialHandler);
postRouter.post("/studies", postStudiesHandler);

module.exports = postRouter;
