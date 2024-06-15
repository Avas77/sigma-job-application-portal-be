import express from "express";
import sequelize from "./mysql/connect.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {}
};

startServer();
