import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "railway",
  "postgres",
  "4Wn3JFAR2mi6fCY15MaH",
  {
    host:"containers-us-west-90.railway.app",
    port: "7621",
    dialect: "postgres"
  }

)