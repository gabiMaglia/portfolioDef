const express = require ("express");
const cors = require ("cors");
const morgan = require ("morgan");
const sequelize = require ("./src/db/conn.js");
const mainRouter = require ("./src/routes/mainRoutes.js");
const PORT = 3001;
const app = express();

app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

// get post routes
app.use("/", mainRouter);

// root routes

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server listening at ${PORT}, running on ${"DEV"}_DB enviroment`
    );
  });
});

module.exports = app;
