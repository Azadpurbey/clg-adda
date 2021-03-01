import path from 'path'
import express from 'express'
import multer from 'multer'
import Material from '../models/materialModel.js'

const router = express.Router()

// showing storage location
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

// Middle ware - validation work - correct file type or not
function checkFileType(file, cb) {
  const filetypes = /pdf/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Pdf only!')
  }
}

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

const uploadMaterial = async (req, res) => {
  const material = await Material.create({
    title: 'Numerical method',
    description: 'Upto 2nd sem',
    path: '/home/azad/Desktop/clg_project/uploads/pdf-1614262362552.pdf',
    rating: 4,
    branch: 'MNC',
    sem: 8,
  })
  if (material) {
    res.status(201).json(material.path)
    console.log(material.path)
  } else {
    res.status(400)
    throw new Error('File is not uploaded')
  }
}

// route setup
router.post('/', upload.single('pdf'), uploadMaterial)

export default router
