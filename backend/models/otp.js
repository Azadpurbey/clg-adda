import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
  createdAt: { type: Date, expires: '180s', default: Date.now },
  otp: {
    type: Number,
    required: true,
  },
})
// otpSchema.createIndex( { "lastModifiedDate": 1 }, { expireAfterSeconds: 30 } )

const OTP = mongoose.model('OTP', otpSchema)
export default OTP
