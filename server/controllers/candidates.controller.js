import candidateModel from "../models/candidate.js";

export const createCandidate = async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    timeInterval,
    linkedin,
    github,
    message,
  } = req.body;
  try {
    const candidate = await candidateModel.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      timeInterval,
      linkedin,
      github,
      message,
    });
    res.status(201).send(candidate);
  } catch (error) {
    res.error(400).send(error);
  }
};
