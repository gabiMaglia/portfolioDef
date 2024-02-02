import {sendMail} from '../config/nodemailer'

export const sendEmailController = async (emailData:any) => {
    const {name, surname, email, mensaje} = emailData
    const response = await sendMail(name, surname, email, mensaje)
    return response
}