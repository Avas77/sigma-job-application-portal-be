import { Sequelize } from "sequelize";

const sequelize = new Sequelize("job_application_portal", "root", "buddy123", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
