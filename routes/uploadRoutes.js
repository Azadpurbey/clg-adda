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
  console.log("***",file.originalname);
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
  storage: storage
  // ,fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb)
  // },
})

// route setup
router.post('/', upload.single('pdf'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router
