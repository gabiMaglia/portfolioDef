
const app = require("./src/app.js");
const { conn } = require("./src/db/conn.js");
const PORT = 3001;
try{
  conn.sync({ alter: false }).then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server listening at ${PORT}, running on ${process.env.NODE_ENV.toUpperCase()}_DB enviroment`
      ); // eslint-disable-line no-console
    });
  });

}
catch(error){
 console.error(error)
}
