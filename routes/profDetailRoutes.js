import express from 'express'
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
router.delete('/:id', deleteProfDetail)
router.put('/edit/:id', updateProfDetail)

export default router
