import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const candidateModel = sequelize.define("Candidates", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  timeInterval: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  github: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default candidateModel;
