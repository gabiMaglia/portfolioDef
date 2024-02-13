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
exports.postStudie = exports.postSocialM = exports.postSkill = exports.postExperience = exports.postProyect = exports.postPersona = void 0;
const conn_1 = __importDefault(require("../db/conn"));
const { User, UserCredentials, UserPhrases, Proyect, Experience, Skills, SocialMedia, Studies } = conn_1.default.models;
const postPersona = (persona) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield User.create({
        name_persona: persona.name_persona,
        surname_persona: persona.surname_persona,
        dni_persona: persona.dni_persona,
        telephone_persona: persona.telephone_persona,
        photo_url: persona.photo_url,
    });
    let newPhrases = yield UserPhrases.findOne({
        where: { UserId: newUser.id },
    });
    if (!newPhrases) {
        newPhrases = yield UserPhrases.create({
            main_phrase: persona.main_phrase,
            phrase1: persona.phrase1,
            phrase2: persona.phrase2,
            phrase3: persona.phrase3,
            UserId: newUser.id,
        });
    }
    let newCredentials = yield UserCredentials.findOne({
        where: { UserId: newUser.id },
    });
    if (!newCredentials) {
        newCredentials = yield UserCredentials.create({
            email: persona.email,
            password: persona.password,
            UserId: newUser.id,
        });
    }
    return { error: false, response: { user: newUser, phrases: newPhrases, credentials: newCredentials } };
});
exports.postPersona = postPersona;
const postProyect = (proyect) => __awaiter(void 0, void 0, void 0, function* () {
    const newProyect = yield Proyect.create({
        title_pro: proyect.title_pro,
        technologies_pro: proyect.technologies_pro,
        description_pro: proyect.description_pro,
        deployLink_pro: proyect.deployLink_pro,
        githubLink_pro: proyect.githubLink_pro,
        img1_pro: proyect.img1_pro,
        img2_pro: proyect.img2_pro,
        img3_pro: proyect.img3_pro
    });
    if (!newProyect)
        return { error: true, response: "No se creo el proyecto" };
    else
        return { error: false, response: newProyect };
});
exports.postProyect = postProyect;
const postExperience = (experience) => __awaiter(void 0, void 0, void 0, function* () {
    const newExperience = yield Experience.create({
        title_exp: experience.title_exp,
        institution_exp: experience.institution_exp,
        startDate_exp: experience.startDate_exp,
        endDate_exp: experience.endDate_exp,
        description_exp: experience.description_exp,
        img_exp: experience.img_exp,
    });
    if (!newExperience)
        return { error: true, response: "No se creo la experiencia" };
    else
        return { error: false, response: newExperience };
});
exports.postExperience = postExperience;
const postSkill = (skill) => __awaiter(void 0, void 0, void 0, function* () {
    const newSkill = yield Skills.create({
        type: skill.type,
        img_skill: skill.img_skill,
        name: skill.name,
        amount: skill.amount
    });
    if (!newSkill)
        return { error: true, response: "No se creo el skill" };
    else
        return { error: false, response: newSkill };
});
exports.postSkill = postSkill;
const postSocialM = (socialMedia) => __awaiter(void 0, void 0, void 0, function* () {
    const newSocialM = yield SocialMedia.create({
        instagram: socialMedia.instagram,
        facebook: socialMedia.facebook,
        linkedin: socialMedia.linkedin,
        github: socialMedia.github
    });
    if (!newSocialM)
        return { error: true, response: "No se creo el social chart" };
    else
        return { error: false, response: newSocialM };
});
exports.postSocialM = postSocialM;
const postStudie = (studie) => __awaiter(void 0, void 0, void 0, function* () {
    const newStudie = yield Studies.create({
        title_st: studie.title_st,
        institution_st: studie.institution_st,
        startDate_st: studie.startDate_st,
        endDate_st: studie.endDate_st,
        description_st: studie.description_st,
        img_st: studie.img_st
    });
    if (!newStudie)
        return { error: true, response: "No se creo el estudio" };
    else
        return { error: false, response: newStudie };
});
exports.postStudie = postStudie;
