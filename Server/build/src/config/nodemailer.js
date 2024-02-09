"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const username = process.env.NODEMAILER_USER;
const password = process.env.NODEMAILER_PASSWORD;
const destinationEmail = process.env.EMAIL_ADDRESS;
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: username,
        pass: password,
    }
});
const sendMail = (name, surname, email, message) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(message);
    const info = yield transporter.sendMail({
        from: email,
        to: destinationEmail,
        subject: `Hola soy ${name} ${surname} tes escribo desde tu portfolio`, // Subject
        text: message, // plain text body
        //   html: "<b>Hello world?</b>", // html body
    }).catch(console.error);
    return info ? info.messageId : { error: true };
});
exports.sendMail = sendMail;
//# sourceMappingURL=nodemailer.js.map