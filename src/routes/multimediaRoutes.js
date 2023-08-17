import { Router, application } from "express";
import {getMultimedia} from '../controllers/multimediaController.js'
const router = Router();



router.get('/api/multimedia', getMultimedia)

export default router