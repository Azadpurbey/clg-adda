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
  addTipById,
  addLinkById,
  getTipAndLinkById,
} from '../controllers/auth.js'

import { authToken } from '../middleware/decodeToken.js'

router.post('/otp', otpController)
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgot/otp', forgotOtp)
router.put('/forgot/password', forgotPassword)
router.put('/editprofile', authToken, updateUserProfile)
router.get('/', allUsers)
router.put('/follow/:id', authToken, handleFollow)
router.get('/followCheck/:id', authToken, checkFollow)
router.get('/following/:id', getTipAndLinkById)

router.route('/tip/:id').post(authToken, addTipById)
router.route('/link/:id').post(authToken, addLinkById)

router.get('/:id', singleUser)

export default router
