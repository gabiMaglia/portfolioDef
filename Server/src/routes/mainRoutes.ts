import { Router } from "express"
import getRouter from './getRoutes'
import postRouter from './postRoutes'
import updateRouter from './updateRoutes'
import deleteRouter from './deleteRoutes'

const mainRouter = Router()

mainRouter.use('/get', getRouter)
mainRouter.use('/add', postRouter)
mainRouter.use('/edit', updateRouter)
mainRouter.use('/delete', deleteRouter)

export default mainRouter