import { Router } from "express"
import getRouter from './getRoutes.js'
import postRouter from './postRoutes.js'
import updateRouter from './updateRoutes.js'
import deleteRouter from './deleteRoutes.js'
import mailRouter from "./mailerRoutes.js"

const mainRouter = Router()

mainRouter.use('/send_email', mailRouter)

mainRouter.use('/get', getRouter)
mainRouter.use('/add', postRouter)
mainRouter.use('/edit', updateRouter)
mainRouter.use('/delete', deleteRouter)

export default mainRouter