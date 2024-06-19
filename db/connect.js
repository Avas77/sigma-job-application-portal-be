import { Sequelize } from "sequelize";
import "dotenv/config";
import { ENV } from "../const/env.js";

const sequelize = new Sequelize(ENV.DATABASE_NAME, ENV.USERNAME, ENV.PASSWORD, {
  dialect: "mysql",
  host: ENV.HOST_NAME,
  dialectModule: "mysql2",
});

export default sequelize;
