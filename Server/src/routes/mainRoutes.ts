import { Router } from "express"
import getRouter from './getRoutes'
import postRouter from './postRoutes'
import updateRouter from './updateRoutes'
import deleteRouter from './deleteRoutes'
import mailRouter from "./mailerRoutes"

const mainRouter = Router()

mainRouter.use('/send_email', mailRouter)

mainRouter.use('/get', getRouter)
mainRouter.use('/add', postRouter)
mainRouter.use('/edit', updateRouter)
mainRouter.use('/delete', deleteRouter)

export default mainRouter