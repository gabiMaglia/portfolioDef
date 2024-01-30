import { Router } from "express"
import { getUserHandler } from "../handlers/userHandler"


const getRouter = Router()

getRouter.use('/persona', getUserHandler)
getRouter.use('/proyect', getUserHandler)
getRouter.use('/experience', getUserHandler)
getRouter.use('/skill', getUserHandler)
getRouter.use('/social', getUserHandler)
getRouter.use('/studies', getUserHandler)




export default getRouter