const mongoose = require('mongoose')

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Post'
  }
})

const Community = mongoose.model('Community', CommunitySchema)

module.exports = { Community }