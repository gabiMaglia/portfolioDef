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
exports.getStudiesHandler = exports.getSocialHandler = exports.getSkillsHandler = exports.getExperienceHandler = exports.getProyectsHandler = exports.getUserHandler = void 0;
const getControllers_1 = require("../controllers/getControllers");
const getUserHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield (0, getControllers_1.getPersona)();
        if (responseData.error)
            res.status(200).send(responseData);
        else {
            const { response } = responseData;
            const transformedData = {
                id: response.id,
                name_persona: response.name_persona,
                surname_persona: response.surname_persona,
                dni_persona: response.dni_persona,
                telephone_persona: response.telephone_persona,
                photo_url: response.photo_url,
                main_phrase: response.UserPhrase.main_phrase,
                phrase1: response.UserPhrase.phrase1,
                phrase2: response.UserPhrase.phrase2,
                phrase3: response.UserPhrase.phrase3,
            };
            res.status(200).json(transformedData);
        }
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.getUserHandler = getUserHandler;
const getProyectsHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield (0, getControllers_1.getProyects)();
        if (responseData.error)
            res.status(200).send(responseData);
        else {
            const { response } = responseData;
            res.status(200).send(response);
        }
        ;
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.getProyectsHandler = getProyectsHandler;
const getExperienceHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield (0, getControllers_1.getExperiences)();
        if (responseData.error)
            res.status(200).send(responseData);
        else {
            const { response } = responseData;
            res.status(200).send(response);
        }
        ;
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.getExperienceHandler = getExperienceHandler;
const getSkillsHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield (0, getControllers_1.getSkills)();
        if (responseData.error)
            res.status(200).send(responseData);
        else {
            const { response } = responseData;
            res.status(200).send(response);
        }
        ;
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.getSkillsHandler = getSkillsHandler;
const getSocialHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield (0, getControllers_1.getSocialM)();
        if (responseData.error)
            res.status(200).send(responseData);
        else {
            const { response } = responseData;
            res.status(200).send(response);
        }
        ;
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.getSocialHandler = getSocialHandler;
const getStudiesHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield (0, getControllers_1.getStudies)();
        if (responseData.error)
            res.status(200).send(responseData);
        else {
            const { response } = responseData;
            res.status(200).send(response);
        }
        ;
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.getStudiesHandler = getStudiesHandler;
//# sourceMappingURL=getHandlers.js.map