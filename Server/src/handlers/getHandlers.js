
import { getPersona, getProyects, getExperiences, getSkills, getSocialM, getStudies } from "../controllers/getControllers.js";


const getUserHandler = async (_req, res) => {
  try {
    const responseData = await getPersona()
    if (responseData.error) res.status(200).send(responseData);
    else{ 
      const {response} = responseData
      const transformedData = {
        id: response.id,
        name_persona: response.name_persona,
        surname_persona: response.surname_persona,
        dni_persona: response.dni_persona,
        telephone_persona: response.telephone_persona,
        photo_url: response.photo_url,
        main_phrase :response.UserPhrase.main_phrase,
        phrase1 :response.UserPhrase.phrase1,
        phrase2 :response.UserPhrase.phrase2,
        phrase3 :response.UserPhrase.phrase3,
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

export { getUserHandler, getProyectsHandler, getExperienceHandler, getSkillsHandler, getSocialHandler, getStudiesHandler };
