export interface User {
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
    
}
export interface Experience {
    id?: String;
    
    institution_exp: String;

    startDate_exp: String;

    endDate_exp: String;

    description_exp: String;

    img_exp: String;

    persona_id: Number;

    persona_DNI_persona: Number;
}
export interface Studies {
    id?: String;

    title_st: String;

    institution_st: String;

    startDate_st: String;

    endDate_st: String;

    description_st: String;

    img_st: String;

    persona_id: Number;

    persona_DNI_persona: Number;
}
export interface UserCredentials {
    id?: String

    email: String

    password: String
}
export interface UserPhrases {
    id: String;

    main_phrase: String;

    phrase1: String;

    phrase2: String;

    phrase3: String;
}
export interface Skills {
    id?: String;

    type: String;

    img_skill: String;

    name: String;

    amount: Number;

}
export interface Social {
    id?: String;

    instagram: String;

    facebook: String;

    linkedin: String;

    github: String;

    gmail: String;
} 

export interface DbResponse<T = any> {
    error: boolean

    response: T
}