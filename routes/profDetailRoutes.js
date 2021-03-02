import express from 'express'
import { addProfDetail, getProfDetail } from '../controllers/profController.js'
const router = express.Router()

router.post('/', addProfDetail)
router.get('/:department', getProfDetail)

export default router
