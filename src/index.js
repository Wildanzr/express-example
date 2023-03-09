require('dotenv').config()

const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/'

// Init express
const app = express()
app.use(express.json())
app.use(cors())

// Service
const { UserService } = require('./services')
const userService = new UserService()

// Controller
const { UserController } = require('./controller')
const userController = new UserController(userService)

// Routes
const { UserRoutes, StorageRoutes } = require('./routes')
const userRoutes = new UserRoutes(userController)
const storageRoutes = new StorageRoutes()

// Connect to MongoDB
mongoose.connect(DATABASE_URL, {
  useNewURLParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => console.error(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/storage', storageRoutes.router)
app.use('/api', userRoutes.router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
