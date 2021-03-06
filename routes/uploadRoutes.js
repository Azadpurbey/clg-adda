import path from 'path'
import express from 'express'
import multer from 'multer'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'

const router = express.Router()

// aws s3 upload *****

const s3 = new aws.S3({
  bucketName: 'material123',
  accessKeyId: process.env.AWS_Access_Key_ID,
  secretAccessKey: process.env.AWS_Secret_Access_Key,
  region: 'ap-south-1',
})

//Single Material upload
const materialUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'clgprojectbucket',
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
      res.json({ error: error })
    } else {
      if (req.file === undefined) {
        res.json('Error: No file Selected')
      } else {
        const materialName = req.file.key
        const materialLocation = req.file.location
        // console.log(`from inside upload routes`, materialName, materialLocation)
        res.json({
          material: materialName,
          location: materialLocation,
        })
      }
    }
  })
})

//Single Material upload
const imageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'clgprojectbucket',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
}).single('image')

router.post('/image', (req, res) => {
  imageUpload(req, res, (error) => {
    if (error) {
      res.json({ error: error })
    } else {
      if (req.file === undefined) {
        res.json('Error: No file Selected')
      } else {
        const imageName = req.file.key
        const imageLocation = req.file.location
        console.log(`from inside upload routes->`,imageLocation)
        res.json({
          material: imageName,
          location: imageLocation,
        })
      }
    }
  })
})


export default router
