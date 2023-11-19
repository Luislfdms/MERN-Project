const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  postTitle: {
    type: String,
    required: true
  },
  postMain: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  upvotes: {
    type: Number,
    required: true
  },
  downvotes: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)