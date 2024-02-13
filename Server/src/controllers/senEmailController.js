import {sendMail} from '../config/nodemailer.js'

export const sendEmailController = async (emailData) => {
    const {name, surname, email, mensaje} = emailData
    const response = await sendMail(name, surname, email, mensaje)
    return response
}