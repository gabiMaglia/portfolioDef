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
exports.getStudies = exports.getSocialM = exports.getSkills = exports.getExperiences = exports.getProyects = exports.getPersona = void 0;
const conn_1 = __importDefault(require("../db/conn"));
const { User, UserPhrases, Proyect, Experience, Skills, SocialMedia, Studies } = conn_1.default.models;
const getPersona = () => __awaiter(void 0, void 0, void 0, function* () {
    const persona = yield User.findOne({ include: UserPhrases });
    if ((persona === null || persona === void 0 ? void 0 : persona.length) === 0)
        return { error: true, response: "No existe ningun usuario" };
    else
        return { error: false, response: persona };
});
exports.getPersona = getPersona;
const getProyects = () => __awaiter(void 0, void 0, void 0, function* () {
    const proyects = yield Proyect.findAll();
    if (proyects.length === 0)
        return { error: true, response: "No existe ningun proyecto" };
    else
        return { error: false, response: proyects };
});
exports.getProyects = getProyects;
const getExperiences = () => __awaiter(void 0, void 0, void 0, function* () {
    const experiences = yield Experience.findAll();
    if (experiences.length === 0)
        return { error: true, response: "No existe ninguna experiencia previa" };
    else
        return { error: false, response: experiences };
});
exports.getExperiences = getExperiences;
const getSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const skills = yield Skills.findAll();
    if (skills.length === 0)
        return { error: true, response: "No existe ningun skill" };
    else
        return { error: false, response: skills };
});
exports.getSkills = getSkills;
const getSocialM = () => __awaiter(void 0, void 0, void 0, function* () {
    const socialM = yield SocialMedia.findAll();
    if (socialM.length === 0)
        return { error: true, response: "No existe ninguna red social" };
    else
        return { error: false, response: socialM };
});
exports.getSocialM = getSocialM;
const getStudies = () => __awaiter(void 0, void 0, void 0, function* () {
    const studies = yield Studies.findAll();
    if (studies.length === 0)
        return { error: true, response: "No existe ningun estudio" };
    else
        return { error: false, response: studies };
});
exports.getStudies = getStudies;
