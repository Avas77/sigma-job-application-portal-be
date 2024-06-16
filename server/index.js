import express from "express";
import sequelize from "./database/connect.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
