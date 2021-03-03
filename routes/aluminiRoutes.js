import express from 'express'
import {
  addAluminiDetail,
  getAluminiDetailByDepartment,
  getAluminiDetailById,
} from '../controllers/aluminiController.js'
const router = express.Router()

router.post('/', addAluminiDetail)
router.get('/profile/:id', getAluminiDetailById)
router.get('/:department', getAluminiDetailByDepartment)

export default router
