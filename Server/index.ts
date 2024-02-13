
import server from "./src/app";
import sequelize from "./src/db/conn";
const PORT = 3001


sequelize.sync({force:false}).then(()=>{
    server.listen(PORT, ()=> {
        console.log(
            `Server listening at ${PORT}, running on ${ 'DEV'}_DB enviroment`
        )
    })
})

export default server