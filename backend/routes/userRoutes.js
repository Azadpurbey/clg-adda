import express from 'express'
const router = express.Router()

import {
  signup,
  signin,
  otpController,
  forgotOtp,
  forgotPassword,
  updateUserProfile,
  allUsers,
  singleUser,
  handleFollow,
  checkFollow,
  getTipById,
  addTipById,
  getLinkById,
  addLinkById,
} from '../controllers/auth.js'

import { authToken } from '../middleware/decodeToken.js'

router.post('/otp', otpController)
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgot/otp', forgotOtp)
router.put('/forgot/password', forgotPassword)
router.put('/editprofile', authToken, updateUserProfile)
router.get('/', authToken, allUsers)
router.put('/follow/:id', authToken, handleFollow)
router.get('/followCheck/:id', authToken, checkFollow)
router.route('/tip/:id').get(getTipById).post(addTipById)
router.route('/link/:id').get(getLinkById).post(addLinkById)

router.get('/:id', singleUser)

export default router
