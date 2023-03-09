const express = require('express')
const multer = require('multer')
const path = require('path')

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: diskStorage,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

class StorageRoutes {
  constructor () {
    this.name = 'Storage Routes'
    this.router = express.Router()

    this.router.post('/upload', upload.single('file'), (req, res) => {
      res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file
      })
    })
  }
}

module.exports = {
  StorageRoutes
}
