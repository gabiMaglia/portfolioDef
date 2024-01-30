import { Router } from "express"
import getRouter from './getRoutes'
import addRouter from './addRoutes'
import updateRouter from './updateRoutes'
import deleteRouter from './deleteRoutes'

const mainRouter = Router()

mainRouter.use('/get', getRouter)
mainRouter.use('/add', addRouter)
mainRouter.use('/edit', updateRouter)
mainRouter.use('/delete', deleteRouter)

export default mainRouter