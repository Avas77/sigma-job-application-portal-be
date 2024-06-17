import candidateModel from "../db/models/candidate.js";

export const createCandidate = async (req, res) => {
  try {
    const candidate = await candidateModel.create(req.body);
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
    if (emailExists) {
      res.status(200).send(emailExists);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateCandidateInfo = async (req, res) => {
  try {
    await candidateModel.update(req.body, {
      where: {
        email: req.body.email,
      },
    });
    res.status(200).send("Update was successfull");
  } catch (error) {
    res.status(400).send(error);
  }
};
