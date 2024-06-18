import axios from "axios";
import { ApplicationInputTypes } from "../types/ApplicationInputTypes";

const httpRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

export const saveCandidateInfo = async (payload: ApplicationInputTypes) => {
  try {
    const response = httpRequest.post("candidates", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
