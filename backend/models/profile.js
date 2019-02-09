const mongoose = require('mongoose')

// Create Profile Schema
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  bio: {
    type: String
  },
  website: {
    type: String,
  },
  communities: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'communities'
  },
  replies: {
    type: String // Same as above but for replies model
  },
  threads: {
    type: String // --||-- post model
  }
})

const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = { Profile }