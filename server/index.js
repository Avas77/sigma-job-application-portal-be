import express from "express";
import sequelize from "./database/connect.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = 3000;

dotenv.config();
app.use(cors());

const startServer = async () => {
  try {
    await sequelize.authenticate();
    const res = await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
``;
