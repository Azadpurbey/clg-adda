import express from 'express'
const router = express.Router()

import {
  getMaterials,
  getSingleMaterial,
} from '../controllers/materialController.js'
import {
  createMaterial,
  updateMaterial,
} from '../controllers/materialController.js'
import { authToken } from '../middleware/decodeToken.js'

router.get('/', getMaterials)
router.get('/:id', getSingleMaterial)
router.post('/',authToken, createMaterial)
router.put('/:id', updateMaterial)

// router.get('/',authToken,(req,res)=>res.send(req.user._id));

export default router
