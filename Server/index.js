import express from "express";
import cors from "cors";
import morgan from "morgan";
import sequelize from "./src/db/conn.js";
import mainRouter from "./src/routes/mainRoutes.js";
const PORT = 3001
const app = express();
app.use(express.json());
app.use(cors())
app.use (morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())


// get post routes
app.use('/', mainRouter)

// root routes


  await sequelize.sync({alter:false}).then(()=> {
    app.listen(PORT, ()=> {
      console.log(
          `Server listening at ${PORT}, running on ${ 'DEV'}_DB enviroment`
      )
    })
  })



export default app;
