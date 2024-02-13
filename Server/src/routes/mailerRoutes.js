const { Router } =  require ("express")
const { sendEmailHandler } = require( "../handlers/sendEmailHandler.js");


const mailRouter = Router()

mailRouter.post('/', sendEmailHandler) 




module.exports = mailRouter