const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, required: false, default: null }
})

const User = model('users', userSchema)

module.exports = {
  User,
  userSchema
}
