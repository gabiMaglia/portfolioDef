import { Router } from "express";
import { sendEmailHandler } from "../handlers/sendEmailHandler.js";


const mailRouter = Router()

mailRouter.post('/', sendEmailHandler) 




export default mailRouter