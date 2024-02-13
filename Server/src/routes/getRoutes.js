import { Router } from "express"
import { getUserHandler, getProyectsHandler, getExperienceHandler, getSkillsHandler, getSocialHandler, getStudiesHandler } from "../handlers/getHandlers.js"


const getRouter = Router()

getRouter.get('/persona', getUserHandler)
getRouter.get('/proyects', getProyectsHandler)
getRouter.get('/experiences', getExperienceHandler)
getRouter.get('/skill', getSkillsHandler)
getRouter.get('/social', getSocialHandler)
getRouter.get('/studies', getStudiesHandler)




export default getRouter