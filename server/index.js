import express from "express";
import sequelize from "./db/connect.js";
import "dotenv/config";
import cors from "cors";
import candidateRouter from "./routes/candidate.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/candidates", candidateRouter);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
