export interface UserInterface {
    id?: String;

    name_persona: String;

    surname_persona: String;

    dni_persona: String;

    telephone_persona: String;

    photo_url: String;

    main_phrase: String;

    phrase1: String;

    phrase2: String;

    phrase3: String;

    email: String

    password: String

}
export interface ProyectInterface {
    id?: string;

    title_pro: string;

    technologies_pro: string;

    description_pro: string;

    deployLink_pro: string;

    githubLink_pro: string;

    img1_pro: string;

    img2_pro: string;
    
    img3_pro: string;
}
export interface ExperienceInterface {
    id?: String;

    title_exp: String;

    institution_exp: String;

    startDate_exp: String;

    endDate_exp: String;

    description_exp: String;

    img_exp: String;

}
export interface StudiesInterface {
    id?: String;

    title_st: String;

    institution_st: String;

    startDate_st: String;

    endDate_st: String;

    description_st: String;

    img_st: String;
}
export interface UserCredentialsInterface {
    id?: String

    email: String

    password: String
}
export interface UserPhrasesInterface {
    id: String;

    main_phrase: String;

    phrase1: String;

    phrase2: String;

    phrase3: String;
}
export interface SkillsInterface {
    id?: String;

    type: String;

    img_skill: String;

    name: String;

    amount: Number;

}
export interface SocialInterface {
    id?: String;

    instagram: String;

    facebook: String;

    linkedin: String;

    github: String;

    gmail: String;
}

export interface DbResponseInterface<T = any> {
    error: boolean

    response: T
}