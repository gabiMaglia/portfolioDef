const app = require("./src/index.js");
const { conn } = require("./src/db/conn.js");
const PORT = 3001;

conn.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server listening at ${PORT}, running on ${process.env.NODE_ENV.toUpperCase()}_DB enviroment`
    ); // eslint-disable-line no-console
  });
});
