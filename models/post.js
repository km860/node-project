const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  replies: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: new Date().getTime()
      }
    }
  ],
  date: {
    type: Date,
    default: new Date().getTime()
  }
})

const Post = mongoose.model('Post', PostSchema)
module.exports = { Post }