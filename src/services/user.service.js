const { User } = require('../models')

class UserService {
  constructor () {
    this.name = 'User Service'
  }

  async addUser (payload) {
    const { username, age, email, picture = null } = payload
    return await User.create({ username, age, email, picture })
  }

  async getUsers () {
    return await User.find()
  }

  async getUser (username) {
    return await User.find({ username })
  }

  async update (username, payload) {
    const { age, email, picture = null } = payload
    return await User.findOneAndUpdate({ username }, { age, email, picture }, { new: true })
  }

  async delete (username) {
    return await User.findOneAndDelete({ username })
  }
}

module.exports = {
  UserService
}
