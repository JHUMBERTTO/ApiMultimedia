import { sequelize } from "../database/database.js"
import modelosInit from '../models/init-models.js'

let models = modelosInit(sequelize)

export const getMultimedia = async (req,res) => {
  let response;
  try {
    response = await models.multimedias.findAll()
    res.status(200).json(response)
    
  } catch (error) {
    res.status(500).json({"error": e.message})
  }
}