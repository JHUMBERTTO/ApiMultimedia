import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "railway",
  "postgres",
  "",
  {
    host:"containers-us-west-90.railway.app",
    port: "7621",
    dialect: "postgres"
  }

)