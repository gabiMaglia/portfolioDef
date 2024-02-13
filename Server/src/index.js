const express = require ("express");
const cors = require ("cors");
const morgan = require ("morgan");
const mainRouter = require ("./routes/mainRoutes.js");

const app = express();
app.name = "API";
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", mainRouter);

// root routes

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = app;
