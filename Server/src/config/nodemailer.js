require("dotenv").config();
const nodemailer = require ('nodemailer')

const username = process.env.NODEMAILER_USER
const password = process.env.NODEMAILER_PASSWORD
const destinationEmail = process.env.EMAIL_ADDRESS

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user:username,
      pass: password,
    }
});

const sendMail = async (name, surname, email, message) => {
    console.log(message)
    const info = await transporter.sendMail({
        from: email, 
        to: destinationEmail, 
        subject: `Hola soy ${name} ${surname} tes escribo desde tu portfolio`, // Subject
        text: message, // plain text body
      //   html: "<b>Hello world?</b>", // html body
      }).catch(console.error);

      return info ? info.messageId : {error: true};
}

module.exports = { sendMail }