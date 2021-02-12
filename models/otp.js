import mongoose from 'mongoose'


const otpSchema=new mongoose.Schema({
        otp:{
            type:Number,
            required:true
        }       
    },{ timestamps: true })

    const OTP = mongoose.model('OTP',otpSchema);
    export default OTP;

