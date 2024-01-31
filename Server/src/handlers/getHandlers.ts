import express from "express";
import { getPersona, getProyects, getExperiences, getSkills, getSocialM, getStudies } from "../controllers/getControllers";


const getUserHandler = async (_req: express.Request, res: express.Response) => {
  try {
    const response = await getPersona()
    if (response.error) res.status(200).send(response);
    else res.status(200).send(response);
  } catch (error) {
    res.status(500).send("error");
  }
};
const getProyectsHandler = async (_req: express.Request, res: express.Response) => {
  try {
    const response = await getProyects()
    if (response.error) res.status(200).send(response);
    else res.status(200).send(response);
  } catch (error) {
    res.status(500).send("error");
  }
};
const getExperienceHandler = async (_req: express.Request, res: express.Response) => {
  try {
    const response = await getExperiences()
    if (response.error) res.status(200).send(response);
    else res.status(200).send(response);
  } catch (error) {
    res.status(500).send("error");
  }
};
const getSkillsHandler = async (_req: express.Request, res: express.Response) => {
  try {
    const response = await getSkills()
    if (response.error) res.status(200).send(response);
    else res.status(200).send(response);
  } catch (error) {
    res.status(500).send("error");
  } 
};

const getSocialHandler = async (_req: express.Request, res: express.Response) => {
  try {
    const response = await getSocialM()
    if (response.error) res.status(200).send(response);
    else res.status(200).send(response);
  } catch (error) {
    res.status(500).send("error");
  }
};

const getStudiesHandler = async (_req: express.Request, res: express.Response) => {
  try {
    const response = await getStudies()
    if (response.error) res.status(200).send(response);
    else res.status(200).send(response);
  } catch (error) {
    res.status(500).send("error");
  }

};

export { getUserHandler, getProyectsHandler, getExperienceHandler, getSkillsHandler, getSocialHandler, getStudiesHandler };
