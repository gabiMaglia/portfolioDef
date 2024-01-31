import express from "express";
import { postPersona, postProyect, postExperience, postSkill, postSocialM, postStudie } from "../controllers/postControllers";
import { User } from "../interfaces/user.interfaces";


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
        } = req.body

        const personaData:User = {
            name_persona,
            surname_persona,
            dni_persona,
            telephone_persona,
            photo_url,
            main_phrase,
            phrase1,
            phrase2,
            phrase3,}

        const newPersona = await postPersona(personaData)
        if (newPersona.error) res.status(200).send(newPersona);
        else res.status(200).send(newPersona);
    } catch (error) {
        res.status(500).send("error");
    }
};
const postProyectsHandler = async (_req: express.Request, res: express.Response) => {
    try {
        const response = await postProyect()
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }
};
const postExperienceHandler = async (_req: express.Request, res: express.Response) => {
    try {
        const response = await postExperience()
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }
};
const postSkillsHandler = async (_req: express.Request, res: express.Response) => {
    try {
        const response = await postSkill()
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }
};

const postSocialHandler = async (_req: express.Request, res: express.Response) => {
    try {
        const response = await postSocialM()
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }
};

const postStudiesHandler = async (_req: express.Request, res: express.Response) => {
    try {
        const response = await postStudie()
        if (response.error) res.status(200).send(response);
        else res.status(200).send(response);
    } catch (error) {
        res.status(500).send("error");
    }

};

export { postUserHandler, postProyectsHandler, postExperienceHandler, postSkillsHandler, postSocialHandler, postStudiesHandler };
