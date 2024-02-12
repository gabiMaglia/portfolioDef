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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailHandler = void 0;
const senEmailController_1 = require("../controllers/senEmailController");
const sendEmailHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, surname, email, mensaje } = req.body;
        const emailData = {
            name, surname, email, mensaje
        };
        const response = yield (0, senEmailController_1.sendEmailController)(emailData);
        if (response.error) {
            return res.status(504).json({ error: false, statuText: 'Server error' });
        }
        else {
            return res.status(200).json({ error: false, statuText: 'Enviado correctamente' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: false, statuText: error });
    }
});
exports.sendEmailHandler = sendEmailHandler;
//# sourceMappingURL=sendEmailHandler.js.map