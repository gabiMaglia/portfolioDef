const express = require ('express');
const cors = require ("cors");
const morgan = require ("morgan");

const app = express();
app.use(express.json());
app.name = "portfolio_be";
app.use(cors());
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );

module.exports = app

