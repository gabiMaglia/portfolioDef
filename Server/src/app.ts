import express from 'express'
import mainRouter from './routes/mainRoutes'
import cors from 'cors'
import morgan from 'morgan'


const app = express()

app.use(cors())
app.use (morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())


app.use('/', mainRouter)


app.use((err:any, _req:any, res:any, _next:any) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


export default app