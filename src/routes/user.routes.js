const express = require('express')

class UserRoutes {
  constructor (userController) {
    this.name = 'User Routes'
    this.router = express.Router()
    this.userController = userController

    this.router.post('/user', this.userController.addUser)
    this.router.get('/user', this.userController.getUsers)
    this.router.get('/user/:username', this.userController.getUser)
    this.router.put('/user/:username', this.userController.update)
    this.router.delete('/user/:username', this.userController.delete)
  }
}

module.exports = {
  UserRoutes
}
