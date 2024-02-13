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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postStudie = exports.postSocialM = exports.postSkill = exports.postExperience = exports.postProyect = exports.postPersona = void 0;
var conn_1 = require("../db/conn");
var _a = conn_1.default.models, User = _a.User, UserCredentials = _a.UserCredentials, UserPhrases = _a.UserPhrases, Proyect = _a.Proyect, Experience = _a.Experience, Skills = _a.Skills, SocialMedia = _a.SocialMedia, Studies = _a.Studies;
var postPersona = function (persona) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, newPhrases, newCredentials;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User.create({
                    name_persona: persona.name_persona,
                    surname_persona: persona.surname_persona,
                    dni_persona: persona.dni_persona,
                    telephone_persona: persona.telephone_persona,
                    photo_url: persona.photo_url,
                })];
            case 1:
                newUser = _a.sent();
                return [4 /*yield*/, UserPhrases.findOne({
                        where: { UserId: newUser.id },
                    })];
            case 2:
                newPhrases = _a.sent();
                if (!!newPhrases) return [3 /*break*/, 4];
                return [4 /*yield*/, UserPhrases.create({
                        main_phrase: persona.main_phrase,
                        phrase1: persona.phrase1,
                        phrase2: persona.phrase2,
                        phrase3: persona.phrase3,
                        UserId: newUser.id,
                    })];
            case 3:
                newPhrases = _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, UserCredentials.findOne({
                    where: { UserId: newUser.id },
                })];
            case 5:
                newCredentials = _a.sent();
                if (!!newCredentials) return [3 /*break*/, 7];
                return [4 /*yield*/, UserCredentials.create({
                        email: persona.email,
                        password: persona.password,
                        UserId: newUser.id,
                    })];
            case 6:
                newCredentials = _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/, { error: false, response: { user: newUser, phrases: newPhrases, credentials: newCredentials } }];
        }
    });
}); };
exports.postPersona = postPersona;
var postProyect = function (proyect) { return __awaiter(void 0, void 0, void 0, function () {
    var newProyect;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Proyect.create({
                    title_pro: proyect.title_pro,
                    technologies_pro: proyect.technologies_pro,
                    description_pro: proyect.description_pro,
                    deployLink_pro: proyect.deployLink_pro,
                    githubLink_pro: proyect.githubLink_pro,
                    img1_pro: proyect.img1_pro,
                    img2_pro: proyect.img2_pro,
                    img3_pro: proyect.img3_pro
                })];
            case 1:
                newProyect = _a.sent();
                if (!newProyect)
                    return [2 /*return*/, { error: true, response: "No se creo el proyecto" }];
                else
                    return [2 /*return*/, { error: false, response: newProyect }];
                return [2 /*return*/];
        }
    });
}); };
exports.postProyect = postProyect;
var postExperience = function (experience) { return __awaiter(void 0, void 0, void 0, function () {
    var newExperience;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Experience.create({
                    title_exp: experience.title_exp,
                    institution_exp: experience.institution_exp,
                    startDate_exp: experience.startDate_exp,
                    endDate_exp: experience.endDate_exp,
                    description_exp: experience.description_exp,
                    img_exp: experience.img_exp,
                })];
            case 1:
                newExperience = _a.sent();
                if (!newExperience)
                    return [2 /*return*/, { error: true, response: "No se creo la experiencia" }];
                else
                    return [2 /*return*/, { error: false, response: newExperience }];
                return [2 /*return*/];
        }
    });
}); };
exports.postExperience = postExperience;
var postSkill = function (skill) { return __awaiter(void 0, void 0, void 0, function () {
    var newSkill;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Skills.create({
                    type: skill.type,
                    img_skill: skill.img_skill,
                    name: skill.name,
                    amount: skill.amount
                })];
            case 1:
                newSkill = _a.sent();
                if (!newSkill)
                    return [2 /*return*/, { error: true, response: "No se creo el skill" }];
                else
                    return [2 /*return*/, { error: false, response: newSkill }];
                return [2 /*return*/];
        }
    });
}); };
exports.postSkill = postSkill;
var postSocialM = function (socialMedia) { return __awaiter(void 0, void 0, void 0, function () {
    var newSocialM;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SocialMedia.create({
                    instagram: socialMedia.instagram,
                    facebook: socialMedia.facebook,
                    linkedin: socialMedia.linkedin,
                    github: socialMedia.github
                })];
            case 1:
                newSocialM = _a.sent();
                if (!newSocialM)
                    return [2 /*return*/, { error: true, response: "No se creo el social chart" }];
                else
                    return [2 /*return*/, { error: false, response: newSocialM }];
                return [2 /*return*/];
        }
    });
}); };
exports.postSocialM = postSocialM;
var postStudie = function (studie) { return __awaiter(void 0, void 0, void 0, function () {
    var newStudie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Studies.create({
                    title_st: studie.title_st,
                    institution_st: studie.institution_st,
                    startDate_st: studie.startDate_st,
                    endDate_st: studie.endDate_st,
                    description_st: studie.description_st,
                    img_st: studie.img_st
                })];
            case 1:
                newStudie = _a.sent();
                if (!newStudie)
                    return [2 /*return*/, { error: true, response: "No se creo el estudio" }];
                else
                    return [2 /*return*/, { error: false, response: newStudie }];
                return [2 /*return*/];
        }
    });
}); };
exports.postStudie = postStudie;
