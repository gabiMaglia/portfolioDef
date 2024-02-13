import dotenv from 'dotenv'; 
dotenv.config();
import app from "./src/app";
import sequelize from "./src/db/conn";
const PORT = 3001




sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=> {
        console.log(
            `Server listening at ${PORT}, running on ${ 'DEV'}_DB enviroment`
        )
    })
})