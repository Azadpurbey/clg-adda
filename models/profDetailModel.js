import mongoose from 'mongoose'
const profDetailSchema = new mongoose.Schema(
  { 
    img_path:{
      type:String,
      default:'/logo192.png'
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    areaOfInterest: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const ProfDetail = mongoose.model('ProfDetail', profDetailSchema)
export default ProfDetail
