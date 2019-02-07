const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const validator = require('validator')
const _ = require('lodash');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = {User}