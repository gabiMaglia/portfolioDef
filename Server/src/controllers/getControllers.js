const sequelize = require ('../db/conn.js')


const { User, UserPhrases, Proyect, Experience, Skills, SocialMedia, Studies } = sequelize.models

 const getPersona = async () => {

    const persona = await User.findOne({include: UserPhrases})
    if (persona?.length === 0) return {error:true, response : "No existe ningun usuario"};
    else return { error: false, response: persona};

}
 const getProyects = async () => {
    
    const proyects = await Proyect.findAll()
    if (proyects.length === 0) return {error:true, response : "No existe ningun proyecto"};
    else return { error: false, response: proyects };
    
}
 const getExperiences = async () => {
    
    const experiences = await Experience.findAll()
    if (experiences.length === 0) return {error:true, response : "No existe ninguna experiencia previa"};
    else return { error: false, response: experiences };
    
}
 const getSkills = async () => {
    
    const skills = await Skills.findAll()
    if (skills.length === 0) return {error:true, response : "No existe ningun skill"};
    else return { error: false, response: skills }; 
}
 const getSocialM = async () => {
    const socialM = await SocialMedia.findAll()
    if (socialM.length === 0) return {error:true, response : "No existe ninguna red social"};
    else return { error: false, response: socialM }; 
}
 const getStudies = async () => {
    
    const studies = await Studies.findAll()
    if (studies.length === 0) return {error:true, response : "No existe ningun estudio"};
    else return { error: false, response: studies };
}


module.exports = {
    getPersona,
    getProyects,
    getExperiences,
    getSkills,
    getSocialM,
    getStudies
}