import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

// showing storage location
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'frontend/public/uploads/')
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
    cb('Pdf only')
  }
}

const upload = multer({
  storage: storage,
  // fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb)
  // },
})

// route setup
router.post('/', upload.single('pdf'), (req, res) => {
  const str = req.file.path
  // var ss="";
  // var i;
  // for(i=16;i<str.length;i++)
  // {
  //   ss=ss+str[i];
  // }
  // console.log(ss);
  // res.send(`${str}`)
  res.send(`/${req.file.path}`)
})

export default router
