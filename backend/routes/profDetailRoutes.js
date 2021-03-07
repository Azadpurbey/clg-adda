import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  addProfDetail,
  getProfDetailById,
  getProfDetailByDepartment,
  deleteProfDetail,
  updateProfDetail,
} from '../controllers/profController.js'
const router = express.Router()

router.post('/', addProfDetail)
router.get('/:department', getProfDetailByDepartment)
router.get('/profile/:id', getProfDetailById)
router.delete('/:id', protect, admin, deleteProfDetail)
router.put('/edit/:id', protect, admin, updateProfDetail)

export default router
