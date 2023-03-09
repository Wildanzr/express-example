class UserController {
  constructor (userService) {
    this.name = 'User Controller'
    this._userService = userService

    // Binding
    this.addUser = this.addUser.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.getUser = this.getUser.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async addUser (req, res) {
    const { username, age, email, picture = null } = req.body
    const user = await this._userService.addUser({ username, age, email, picture })
    res.status(201).json(user)
  }

  async getUsers (req, res) {
    const users = await this._userService.getUsers()
    res.status(200).json(users)
  }

  async getUser (req, res) {
    const { username } = req.params
    const user = await this._userService.getUser(username)
    res.status(200).json(user)
  }

  async update (req, res) {
    const { username } = req.params
    const { age, email, picture = null } = req.body
    const user = await this._userService.update(username, { age, email, picture })
    res.status(200).json(user)
  }

  async delete (req, res) {
    const { username } = req.params
    const user = await this._userService.delete(username)
    res.status(200).json(user)
  }
}

module.exports = {
  UserController
}
