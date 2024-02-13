const sendMail = require ('../config/nodemailer.js')

 const sendEmailController = async (emailData) => {
    const {name, surname, email, mensaje} = emailData
    const response = await sendMail(name, surname, email, mensaje)
    return response
}

module.exports = {sendEmailController}