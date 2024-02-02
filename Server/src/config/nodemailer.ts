import nodemailer from 'nodemailer'
import dotenv from 'dotenv'; 
dotenv.config();

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

export const sendMail = async (name:string, surname:string, email:string, message:string) => {
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
