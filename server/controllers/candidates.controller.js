import candidateModel from "../db/models/candidate.js";

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
    res.status(400).send(error);
  }
};

export const checkEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const emailExists = await candidateModel.findOne({
      where: {
        email,
      },
    });
    console.log("Email", emailExists);
    if (emailExists) {
      res.status(200).send(emailExists);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
