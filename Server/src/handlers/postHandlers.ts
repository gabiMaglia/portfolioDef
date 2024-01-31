import express from "express";
import { postPersona, postProyect, postExperience, postSkill, postSocialM, postStudie } from "../controllers/postControllers";
import { ExperienceInterface, ProyectInterface, SkillsInterface, SocialInterface, StudiesInterface, UserInterface } from "../interfaces/user.interfaces";


const postUserHandler = async (req: express.Request, res: express.Response) => {
    try {
        const {
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

        } = req.body

        const personaData: UserInterface = {

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
        }

        const newPersona = await postPersona(personaData)

        if (newPersona.error) res.status(200).send(newPersona);
        else res.status(200).send(newPersona);
    } catch (error) {
        res.status(500).send(error);
    }
};
const postProyectsHandler = async (req: express.Request, res: express.Response) => {
    try {
        const {
            title_pro,
            technologies_pro,
            description_pro,
            deployLink_pro,
            githubLink_pro,
            img1_pro,
            img2_pro,
            img3_pro

        } = req.body

        const proyectData: ProyectInterface = {

            title_pro,
            technologies_pro,
            description_pro,
            deployLink_pro,
            githubLink_pro,
            img1_pro,
            img2_pro,
            img3_pro

        }
        const response = await postProyect(proyectData)
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
};
const postExperienceHandler = async (req: express.Request, res: express.Response) => {
    try {
        const {
            title_exp,
            institution_exp,
            startDate_exp,
            endDate_exp,
            description_exp,
            img_exp,
        } = req.body

        const experienceData: ExperienceInterface = {

            title_exp,
            institution_exp,
            startDate_exp,
            endDate_exp,
            description_exp,
            img_exp,

        }
        const response = await postExperience(experienceData)
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
};
const postSkillsHandler = async (req: express.Request, res: express.Response) => {
    try {
        const {
            type,
            img_skill,
            name,
            amount,
        } = req.body

        const skillData: SkillsInterface = {
            type,
            img_skill,
            name,
            amount,
        }
        const response = await postSkill(skillData)
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }
};

const postSocialHandler = async (req: express.Request, res: express.Response) => {
    try {
        const {
            instagram,
            facebook,
            linkedin,
            github,
            gmail
        } = req.body

        const socialMediaData: SocialInterface = {
         instagram,
            facebook,
            linkedin,
            github,
            gmail
        }
        const response = await postSocialM(socialMediaData)
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }
};

const postStudiesHandler = async (req: express.Request, res: express.Response) => {
    try {
        const {
            title_st,
            institution_st,
            startDate_st,
            endDate_st,
            description_st,
            img_st
        } = req.body

        const studieData: StudiesInterface = {
            title_st,
            institution_st,
            startDate_st,
            endDate_st,
            description_st,
            img_st
        }
        const response = await postStudie(studieData)
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }

};

export { postUserHandler, postProyectsHandler, postExperienceHandler, postSkillsHandler, postSocialHandler, postStudiesHandler };
