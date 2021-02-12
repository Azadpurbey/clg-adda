import express from 'express'
const router = express.Router()

import { signup, signin } from '../controllers/auth.js'
import { authToken } from '../middleware/decodeToken.js'

//router.post('/otp', otpController)
router.post('/signup', signup)
router.post('/signin', signin)
// router.get('/',authToken,(req,res)=>res.send(req.user._id));

export default router
