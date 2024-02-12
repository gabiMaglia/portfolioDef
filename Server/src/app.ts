import express from 'express'
import mainRouter from './routes/mainRoutes'
import cors from 'cors'
import morgan from 'morgan'

const server = express()
server.use(express.static('public'))
server.use(cors())
server.use (morgan(':method :url :status :res[content-length] - :response-time ms'))
// const morgan = require('morgan')
server.use(express.json())


server.use('/', mainRouter)


server.use((err:any, _req:any, res:any, _next:any) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


export default server