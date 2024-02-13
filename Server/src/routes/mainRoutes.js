const { Router } =  require ("express")
const {getRouter} = require ('./getRoutes.js')
const {postRouter} = require ('./postRoutes.js')
const {updateRouter} = require ('./updateRoutes.js')
const {deleteRouter} = require ('./deleteRoutes.js')
const {mailRouter} = require ("./mailerRoutes.js")

const mainRouter = Router()


mainRouter.use('/send_email', mailRouter)

mainRouter.use('/get', getRouter)
mainRouter.use('/add', postRouter)
mainRouter.use('/edit', updateRouter)
mainRouter.use('/delete', deleteRouter)

module.exports =  mainRouter