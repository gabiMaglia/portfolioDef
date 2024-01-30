import express from 'express'
import mainRouter from './routes/mainRoutes'
const server = express()

server.use(express.json())

const PORT = 3001

server.use('/', mainRouter)
// server.get('/ping', (_req, res) => {
//     console.log('someone pinned')
//     res.send('pong')
// })
server.listen(PORT, ()=> {
    console.log(`Server runing at ${PORT}`)
})