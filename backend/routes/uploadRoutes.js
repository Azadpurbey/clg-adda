import path from 'path'
import express from 'express'
import multer from 'multer'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'

const router = express.Router()

// aws s3 upload *****
const s3 = new aws.S3({
  bucketName: 'clgbucket4',
  accessKeyId: process.env.AWS_Access_Key_ID,
  secretAccessKey: process.env.AWS_Secret_Access_Key,
  region: 'ap-south-1',
})

//Single Material upload
const materialUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'clgbucket4',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
}).single('pdf')

router.post('/material', (req, res) => {
  materialUpload(req, res, (error) => {
    if (error) {
      res.status(404).json({ error: error })
    } else {
      if (req.file === undefined) {
        res.status(403).json({ Error: 'No file Selected' })
      } else {
        const materialName = req.file.key
        const materialLocation = req.file.location
        res.status(201).json({
          material: materialName,
          location: materialLocation,
        })
      }
    }
  })
})

//Upload image in upload folder

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

const imageUpload = multer({
  storage: storage,
})

// route setup
router.post('/image', imageUpload.single('image'), (req, res) => {
  if (req.file === undefined) {
    res.json({ error: error })
  } else {
    res.json({
      location: `/${req.file.path}`,
    })
  }
  // res.send(`/${req.file.path}`)
})

export default router
