
const { postPersona, postProyect, postExperience, postSkill, postSocialM, postStudie } = require ("../controllers/postControllers.js");



const postUserHandler = async (req, res) => {
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
        }

        const newPersona = await postPersona(personaData)

        if (newPersona.error) res.status(200).send(newPersona);
        else res.status(200).send(newPersona);
    } catch (error) {
        res.status(500).send(error);
    }
};
const postProyectsHandler = async (req, res) => {
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

        const proyectData = {

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
const postExperienceHandler = async (req, res) => {
    try {
        const {
            title_exp,
            institution_exp,
            startDate_exp,
            endDate_exp,
            description_exp,
            img_exp,
        } = req.body

        const experienceData = {

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
const postSkillsHandler = async (req, res) => {
    try {
        const {
            type,
            img_skill,
            name,
            amount,
        } = req.body

        const skillData = {
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

const postSocialHandler = async (req, res) => {
    try {
        const {
            instagram,
            facebook,
            linkedin,
            github,
            gmail
        } = req.body

        const socialMediaData = {
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

const postStudiesHandler = async (req, res) => {
    try {
        const {
            title_st,
            institution_st,
            startDate_st,
            endDate_st,
            description_st,
            img_st
        } = req.body

        const studieData = {
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

module.exports = { postUserHandler, postProyectsHandler, postExperienceHandler, postSkillsHandler, postSocialHandler, postStudiesHandler };
