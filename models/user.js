const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  communities: {
    type: Array
  }

})

const User = mongoose.model('User', UserSchema)

module.exports = {User}