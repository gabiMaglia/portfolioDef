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
exports.postStudiesHandler = exports.postSocialHandler = exports.postSkillsHandler = exports.postExperienceHandler = exports.postProyectsHandler = exports.postUserHandler = void 0;
const postControllers_1 = require("../controllers/postControllers");
const postUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name_persona, surname_persona, dni_persona, telephone_persona, photo_url, main_phrase, phrase1, phrase2, phrase3, email, password } = req.body;
        const personaData = {
            name_persona,
            surname_persona,
            dni_persona,
            telephone_persona,
            photo_url,
            main_phrase,
            phrase1,
            phrase2,
            phrase3,
            email,
            password
        };
        const newPersona = yield (0, postControllers_1.postPersona)(personaData);
        if (newPersona.error)
            res.status(200).send(newPersona);
        else
            res.status(200).send(newPersona);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postUserHandler = postUserHandler;
const postProyectsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title_pro, technologies_pro, description_pro, deployLink_pro, githubLink_pro, img1_pro, img2_pro, img3_pro } = req.body;
        const proyectData = {
            title_pro,
            technologies_pro,
            description_pro,
            deployLink_pro,
            githubLink_pro,
            img1_pro,
            img2_pro,
            img3_pro
        };
        const response = yield (0, postControllers_1.postProyect)(proyectData);
        if (response.error)
            res.status(200).send(response);
        else
            res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postProyectsHandler = postProyectsHandler;
const postExperienceHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title_exp, institution_exp, startDate_exp, endDate_exp, description_exp, img_exp, } = req.body;
        const experienceData = {
            title_exp,
            institution_exp,
            startDate_exp,
            endDate_exp,
            description_exp,
            img_exp,
        };
        const response = yield (0, postControllers_1.postExperience)(experienceData);
        if (response.error)
            res.status(200).send(response);
        else
            res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postExperienceHandler = postExperienceHandler;
const postSkillsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, img_skill, name, amount, } = req.body;
        const skillData = {
            type,
            img_skill,
            name,
            amount,
        };
        const response = yield (0, postControllers_1.postSkill)(skillData);
        if (response.error)
            res.status(200).send(response);
        else
            res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.postSkillsHandler = postSkillsHandler;
const postSocialHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instagram, facebook, linkedin, github, gmail } = req.body;
        const socialMediaData = {
            instagram,
            facebook,
            linkedin,
            github,
            gmail
        };
        const response = yield (0, postControllers_1.postSocialM)(socialMediaData);
        if (response.error)
            res.status(200).send(response);
        else
            res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.postSocialHandler = postSocialHandler;
const postStudiesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title_st, institution_st, startDate_st, endDate_st, description_st, img_st } = req.body;
        const studieData = {
            title_st,
            institution_st,
            startDate_st,
            endDate_st,
            description_st,
            img_st
        };
        const response = yield (0, postControllers_1.postStudie)(studieData);
        if (response.error)
            res.status(200).send(response);
        else
            res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send("error");
    }
});
exports.postStudiesHandler = postStudiesHandler;
//# sourceMappingURL=postHandlers.js.map