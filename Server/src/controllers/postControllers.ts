import sequelize from '../db/conn'
import { DbResponseInterface, UserInterface, ProyectInterface, ExperienceInterface, SkillsInterface, SocialInterface } from '../interfaces/user.interfaces'

const { User, UserCredentials, UserPhrases, Proyect, Experience, Skills, SocialMedia, Studies } = sequelize.models


export const postPersona = async (persona: UserInterface): Promise<DbResponseInterface> => {

    const newUser: any = await User.create({
        name_persona: persona.name_persona,
        surname_persona: persona.surname_persona,
        dni_persona: persona.dni_persona,
        telephone_persona: persona.telephone_persona,
        photo_url: persona.photo_url,
    });

    let newPhrases = await UserPhrases.findOne({
        where: { UserId: newUser.id },
    });

    if (!newPhrases) {
        newPhrases = await UserPhrases.create({
            main_phrase: persona.main_phrase,
            phrase1: persona.phrase1,
            phrase2: persona.phrase2,
            phrase3: persona.phrase3,
            UserId: newUser.id,
        });
    }

    let newCredentials = await UserCredentials.findOne({
        where: { UserId: newUser.id },
    });

    if (!newCredentials) {
        newCredentials = await UserCredentials.create({
            email: persona.email,
            password: persona.password,
            UserId: newUser.id,

        })
    }
    return { error: false, response: { user: newUser, phrases: newPhrases, credentials: newCredentials } };
};

export const postProyect = async (proyect: ProyectInterface): Promise<DbResponseInterface> => {
    const newProyect: any = await Proyect.create({
        title_pro: proyect.title_pro,
        technologies_pro: proyect.technologies_pro,
        description_pro: proyect.description_pro,
        deployLink_pro: proyect.deployLink_pro,
        githubLink_pro: proyect.githubLink_pro,
        img1_pro: proyect.img1_pro,
        img2_pro: proyect.img2_pro,
        img3_pro: proyect.img3_pro
    })
    if (!newProyect) return { error: true, response: "No se creo el proyecto" };

    else return { error: false, response: newProyect };
}
export const postExperience = async (experience: ExperienceInterface): Promise<DbResponseInterface> => {
    const newExperience: any = await Experience.create({
        title_exp: experience.title_exp,
        institution_exp: experience.institution_exp,
        startDate_exp: experience.startDate_exp,
        endDate_exp: experience.endDate_exp,
        description_exp: experience.description_exp,
        img_exp: experience.img_exp,
    })
    if (!newExperience) return { error: true, response: "No se creo la experiencia" };

    else return { error: false, response: newExperience };
}
export const postSkill = async (skill:SkillsInterface): Promise<DbResponseInterface> => {
    const newSkill: any = await Skills.create({
        type: skill.type,
        img_skill: skill.img_skill,
        name: skill.name,
        amount: skill.amount
    })
    if (!newSkill) return { error: true, response: "No se creo el skill" };

    else return { error: false, response: newSkill };
}
export const postSocialM = async (socialMedia:SocialInterface): Promise<DbResponseInterface> => {

    const newSocialM: any = await SocialMedia.create({
        instagram: socialMedia.instagram,
        facebook: socialMedia.facebook,
        linkedin: socialMedia.linkedin,
        github: socialMedia.github
    })
    if (!newSocialM) return { error: true, response: "No se creo el social chart" };

    else return { error: false, response: newSocialM };
}
export const postStudie = async (studie: any): Promise<DbResponseInterface> => {
    const newStudie: any = await Studies.create({
        title_st: studie.title_st,
        institution_st: studie.institution_st,
        startDate_st: studie.startDate_st,
        endDate_st: studie.endDate_st,
        description_st: studie.description_st,
        img_st: studie.img_st
    })
    if (!newStudie) return { error: true, response: "No se creo el estudio" };

    else return { error: false, response: newStudie };
}