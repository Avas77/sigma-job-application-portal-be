import express from "express";
import sequelize from "./database/connect.js";
import dotenv from "dotenv";
import cors from "cors";
import candidateRouter from "./routes/candidate.routes.js";

const app = express();
const PORT = 3000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/v1/candidates", candidateRouter);

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
