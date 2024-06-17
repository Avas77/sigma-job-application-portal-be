import { Sequelize } from "sequelize";
console.log("Env", process.env.API_URL);
const sequelize = new Sequelize("job_application_portal", "root", "buddy123", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
