import server from "./src/app";
import sequelize from "./src/db/conn";
const PORT = 3001

import dotenv from 'dotenv'; 
dotenv.config();



sequelize.sync({force:true}).then(()=>{
    server.listen(PORT, ()=> {
        console.log(
            `Server listening at ${PORT}, running on ${ 'DEV'}_DB enviroment`
        )
    })
})