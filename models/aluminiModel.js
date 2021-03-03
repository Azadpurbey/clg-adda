import mongoose from 'mongoose'
const aluminiDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: 'Not available',
    },
    contact: {
      type: String,
      default: 'Not available',
    },
    batch: {
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
    linkedIn: {
      type: String,
      default: 'Not available',
    },
    twitter: {
      type: String,
      default: 'Not available',
    },
    instagram: {
      type: String,
      default: 'Not available',
    },
    facebook: {
      type: String,
      default: 'Not available',
    },
  },
  { timestamps: true }
)

const AluminiDetail = mongoose.model('aluminiDetail', aluminiDetailSchema)
export default AluminiDetail
