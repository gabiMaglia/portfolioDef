import { Router } from "express";
import { sendEmailHandler } from "../handlers/sendEmailHandler";


const mailRouter = Router()

mailRouter.post('/', sendEmailHandler) 




export default mailRouter