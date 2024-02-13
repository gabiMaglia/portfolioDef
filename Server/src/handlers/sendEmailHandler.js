
import { sendEmailController } from "../controllers/senEmailController.js";

 const sendEmailHandler = async (req, res) => {
     try {
        const {name, surname, email, mensaje} = req.body
        const emailData = {
            name, surname, email, mensaje
        }
        const response = await sendEmailController(emailData)
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