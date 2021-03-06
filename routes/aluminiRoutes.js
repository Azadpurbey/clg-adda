import express from 'express'
import {
  addAluminiDetail,
  getAluminiDetailByDepartment,
  getAluminiDetailById,
  deleteAluminiDetail,
  updateAluminiDetail,
} from '../controllers/aluminiController.js'
const router = express.Router()

router.post('/', addAluminiDetail)
router.get('/profile/:id', getAluminiDetailById)
router.get('/:department', getAluminiDetailByDepartment)
router.delete('/:id', deleteAluminiDetail)
router.put('/edit/:id', updateAluminiDetail)

export default router
