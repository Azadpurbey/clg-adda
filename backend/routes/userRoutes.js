import express from 'express'
const router = express.Router()

import {
  signup,
  signin,
  otpController,
  forgotOtp,
  forgotPassword,
  updateUserProfile,
  allUSers,
  singleUser,
  handleFollow,
  checkFollow
} from '../controllers/auth.js'

import { authToken } from '../middleware/decodeToken.js'

router.post('/otp', otpController)
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgot/otp', forgotOtp)
router.put('/forgot/password', forgotPassword)
router.put('/editprofile', authToken, updateUserProfile)
router.get('/',authToken,allUSers);
router.get('/:id',singleUser);
// router.get('/',authToken,(req,res)=>res.send(req.user._id));
router.put('/follow/:id',authToken,handleFollow);
router.get('/followCheck/:id',authToken,checkFollow);

export default router
