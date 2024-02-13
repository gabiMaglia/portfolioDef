const { Router } =  require ("express")
const { getUserHandler, getProyectsHandler, getExperienceHandler, getSkillsHandler, getSocialHandler, getStudiesHandler } = require ("../handlers/getHandlers.js")


const getRouter = Router()

getRouter.get('/persona', getUserHandler)
getRouter.get('/proyects', getProyectsHandler)
getRouter.get('/experiences', getExperienceHandler)
getRouter.get('/skill', getSkillsHandler)
getRouter.get('/social', getSocialHandler)
getRouter.get('/studies', getStudiesHandler)




module.exports = {getRouter}