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
exports.postStudiesHandler = exports.postSocialHandler = exports.postSkillsHandler = exports.postExperienceHandler = exports.postProyectsHandler = exports.postUserHandler = void 0;
var postControllers_1 = require("../controllers/postControllers");
var postUserHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_persona, surname_persona, dni_persona, telephone_persona, photo_url, main_phrase, phrase1, phrase2, phrase3, email, password, personaData, newPersona, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_persona = _a.name_persona, surname_persona = _a.surname_persona, dni_persona = _a.dni_persona, telephone_persona = _a.telephone_persona, photo_url = _a.photo_url, main_phrase = _a.main_phrase, phrase1 = _a.phrase1, phrase2 = _a.phrase2, phrase3 = _a.phrase3, email = _a.email, password = _a.password;
                personaData = {
                    name_persona: name_persona,
                    surname_persona: surname_persona,
                    dni_persona: dni_persona,
                    telephone_persona: telephone_persona,
                    photo_url: photo_url,
                    main_phrase: main_phrase,
                    phrase1: phrase1,
                    phrase2: phrase2,
                    phrase3: phrase3,
                    email: email,
                    password: password
                };
                return [4 /*yield*/, (0, postControllers_1.postPersona)(personaData)];
            case 1:
                newPersona = _b.sent();
                if (newPersona.error)
                    res.status(200).send(newPersona);
                else
                    res.status(200).send(newPersona);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postUserHandler = postUserHandler;
var postProyectsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title_pro, technologies_pro, description_pro, deployLink_pro, githubLink_pro, img1_pro, img2_pro, img3_pro, proyectData, response, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title_pro = _a.title_pro, technologies_pro = _a.technologies_pro, description_pro = _a.description_pro, deployLink_pro = _a.deployLink_pro, githubLink_pro = _a.githubLink_pro, img1_pro = _a.img1_pro, img2_pro = _a.img2_pro, img3_pro = _a.img3_pro;
                proyectData = {
                    title_pro: title_pro,
                    technologies_pro: technologies_pro,
                    description_pro: description_pro,
                    deployLink_pro: deployLink_pro,
                    githubLink_pro: githubLink_pro,
                    img1_pro: img1_pro,
                    img2_pro: img2_pro,
                    img3_pro: img3_pro
                };
                return [4 /*yield*/, (0, postControllers_1.postProyect)(proyectData)];
            case 1:
                response = _b.sent();
                if (response.error)
                    res.status(200).send(response);
                else
                    res.status(200).send(response);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                res.status(500).send(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postProyectsHandler = postProyectsHandler;
var postExperienceHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title_exp, institution_exp, startDate_exp, endDate_exp, description_exp, img_exp, experienceData, response, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title_exp = _a.title_exp, institution_exp = _a.institution_exp, startDate_exp = _a.startDate_exp, endDate_exp = _a.endDate_exp, description_exp = _a.description_exp, img_exp = _a.img_exp;
                experienceData = {
                    title_exp: title_exp,
                    institution_exp: institution_exp,
                    startDate_exp: startDate_exp,
                    endDate_exp: endDate_exp,
                    description_exp: description_exp,
                    img_exp: img_exp,
                };
                return [4 /*yield*/, (0, postControllers_1.postExperience)(experienceData)];
            case 1:
                response = _b.sent();
                if (response.error)
                    res.status(200).send(response);
                else
                    res.status(200).send(response);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(500).send(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postExperienceHandler = postExperienceHandler;
var postSkillsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, img_skill, name_1, amount, skillData, response, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, type = _a.type, img_skill = _a.img_skill, name_1 = _a.name, amount = _a.amount;
                skillData = {
                    type: type,
                    img_skill: img_skill,
                    name: name_1,
                    amount: amount,
                };
                return [4 /*yield*/, (0, postControllers_1.postSkill)(skillData)];
            case 1:
                response = _b.sent();
                if (response.error)
                    res.status(200).send(response);
                else
                    res.status(200).send(response);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postSkillsHandler = postSkillsHandler;
var postSocialHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, instagram, facebook, linkedin, github, gmail, socialMediaData, response, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, instagram = _a.instagram, facebook = _a.facebook, linkedin = _a.linkedin, github = _a.github, gmail = _a.gmail;
                socialMediaData = {
                    instagram: instagram,
                    facebook: facebook,
                    linkedin: linkedin,
                    github: github,
                    gmail: gmail
                };
                return [4 /*yield*/, (0, postControllers_1.postSocialM)(socialMediaData)];
            case 1:
                response = _b.sent();
                if (response.error)
                    res.status(200).send(response);
                else
                    res.status(200).send(response);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postSocialHandler = postSocialHandler;
var postStudiesHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title_st, institution_st, startDate_st, endDate_st, description_st, img_st, studieData, response, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title_st = _a.title_st, institution_st = _a.institution_st, startDate_st = _a.startDate_st, endDate_st = _a.endDate_st, description_st = _a.description_st, img_st = _a.img_st;
                studieData = {
                    title_st: title_st,
                    institution_st: institution_st,
                    startDate_st: startDate_st,
                    endDate_st: endDate_st,
                    description_st: description_st,
                    img_st: img_st
                };
                return [4 /*yield*/, (0, postControllers_1.postStudie)(studieData)];
            case 1:
                response = _b.sent();
                if (response.error)
                    res.status(200).send(response);
                else
                    res.status(200).send(response);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _b.sent();
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postStudiesHandler = postStudiesHandler;
