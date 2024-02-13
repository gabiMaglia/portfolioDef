import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import sequelize from "./src/db/conn";
import mainRouter from "./src/routes/mainRoutes";
const PORT = 3001
const app = express();
app.use(express.json());
app.use(cors())
app.use (morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())


// get post routes
app.use('/', mainRouter)

// root routes
app.get("/", (req: Request, res:Response) => {
  res.status(200).json({ message: "Hello World" });
});


(async()=> {
  await sequelize.sync({alter:false})
})();

app.listen(PORT, ()=> {
  console.log(
      `Server listening at ${PORT}, running on ${ 'DEV'}_DB enviroment`
  )
})

export default app;
