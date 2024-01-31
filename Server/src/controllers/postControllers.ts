import sequelize from '../db/conn'
import { DbResponse, User } from '../interfaces/user.interfaces'

const { User, UserPhrases, Proyect, Experience, Skills, SocialMedia, Studies } = sequelize.models

export const postPersona = async (persona: User): Promise<DbResponse> => {
    const newUser = await User.findOrCreate({
        where: {name_persona : persona.name_persona},
        defaults: {
            name_persona: persona.name_persona,
            surname_persona: persona.surname_persona,
            dni_persona: persona.dni_persona,
            telephone_persona: persona.telephone_persona,
            photo_url: persona.photo_url,
        },
    })
    const newPhrases = await UserPhrases.create({
        main_phrase: persona.main_phrase,
        phrase1: persona.phrase1,
        phrase2: persona.phrase2,
        phrase3: persona.phrase3
      
    })
    return { error: false, response: { ...newUser, ...newPhrases } };

}
export const postProyect = async (): Promise<DbResponse> => {

    const proyects = await Proyect.findAll()
    if (proyects.length === 0) return { error: true, response: "No existe ningun proyecto" };
    else return { error: false, response: proyects };

}
export const postExperience = async (): Promise<DbResponse> => {

    const experiences = await Experience.findAll()
    if (experiences.length === 0) return { error: true, response: "No existe ninguna experiencia previa" };
    else return { error: false, response: experiences };

}
export const postSkill = async (): Promise<DbResponse> => {

    const skills = await Skills.findAll()
    if (skills.length === 0) return { error: true, response: "No existe ningun skill" };
    else return { error: false, response: skills };
}
export const postSocialM = async (): Promise<DbResponse> => {

    const socialM = await SocialMedia.findAll()
    if (socialM.length === 0) return { error: true, response: "No existe ninguna red social" };
    else return { error: false, response: socialM };
}
export const postStudie = async (): Promise<DbResponse> => {

    const studies = await Studies.findAll()
    if (studies.length === 0) return { error: true, response: "No existe ningun estudio" };
    else return { error: false, response: studies };
}