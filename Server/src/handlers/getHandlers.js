
const { getPersona, getProyects, getExperiences, getSkills, getSocialM, getStudies } = require ("../controllers/getControllers");


const getUserHandler = async (_req, res) => {
  try {
    const responseData = await getPersona()
    if (responseData.error) res.status(200).send(responseData);
    else{ 
      const {response} = responseData
    
      const transformedData = {
        id: response.persona.id,
        name_persona: response.persona.name_persona,
        surname_persona: response.persona.surname_persona,
        dni_persona: response.persona.dni_persona,
        telephone_persona: response.persona.telephone_persona,
        photo_url: response.persona.photo_url,
        main_phrase: response.phrases.main_phrase,
        phrase1 : response.phrases.phrase1
      };
      
      
      res.status(200).json(transformedData);
    }
  } catch (error) {
    res.status(500).send("error");
  }
};
const getProyectsHandler = async (_req, res) => {
  try {
    const responseData = await getProyects()
    if (responseData.error) res.status(200).send(responseData);
    else{ 
      const {response} = responseData
      res.status(200).send(response)
    };
  } catch (error) {
    res.status(500).send("error");
  }
};
const getExperienceHandler = async (_req, res) => {
  try {
    const responseData = await getExperiences()
    if (responseData.error) res.status(200).send(responseData);
    else {
       const {response} = responseData 
       res.status(200).send(response)
    };
  } catch (error) {
    res.status(500).send("error");
  }
};
const getSkillsHandler = async (_req, res) => {
  try {
    const responseData = await getSkills()
    if (responseData.error) res.status(200).send(responseData);
    else {
      const {response} = responseData
      res.status(200).send(response)
    };
  } catch (error) {
    res.status(500).send("error");
  } 
};
const getSocialHandler = async (_req, res) => {
  try {
    const responseData = await getSocialM()
    if (responseData.error) res.status(200).send(responseData);
    else{ 
      const {response} = responseData
      res.status(200).send(response)
    };
  } catch (error) {
    res.status(500).send("error");
  }
};
const getStudiesHandler = async (_req, res) => {
  try {
    const responseData = await getStudies()
    if (responseData.error) res.status(200).send(responseData);
    else{
      const {response} = responseData
       res.status(200).send(response)
    };
  } catch (error) {
    res.status(500).send("error");
  }

};

module.exports = { getUserHandler, getProyectsHandler, getExperienceHandler, getSkillsHandler, getSocialHandler, getStudiesHandler };
