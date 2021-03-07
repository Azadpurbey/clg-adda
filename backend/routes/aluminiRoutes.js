import express from 'express'
import {
  addAluminiDetail,
  getAluminiDetailByDepartment,
  getAluminiDetailById,
  deleteAluminiDetail,
  updateAluminiDetail,
} from '../controllers/aluminiController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/', addAluminiDetail)
router.get('/profile/:id', getAluminiDetailById)
router.get('/:department', getAluminiDetailByDepartment)
router.delete('/:id', protect, admin, deleteAluminiDetail)
router.put('/edit/:id', protect, admin, updateAluminiDetail)

export default router
