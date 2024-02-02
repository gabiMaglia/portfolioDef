import express from "express";
import { sendEmailController } from "../controllers/senEmailController";

 const sendEmailHandler = async (req: express.Request, res: express.Response) => {
     try {
        const {name, surname, email, mensaje}:any = req.body
        const emailData = {
            name, surname, email, mensaje
        }
        const response: any = await sendEmailController(emailData)
        if (response.error){
            return res.status(504).json({error: false, statuText:'Server error'})
        }else {
      
           return res.status(200).json({error: false, statuText:'Enviado correctamente'})
        }
    } catch (error) {
        return res.status(500).json({error: false, statuText:error})
    }
}

export {sendEmailHandler}