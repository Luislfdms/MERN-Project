const mongoose = require('mongoose')
const Post = require('../models/postModel')
const User = require('../models/userModel')

const sampleController = {
  getSampleData: (req, res) => {
    res.json({ message: 'Sample API route' });
  }
};

const createPost = async (req, res) => {
  const {postTitle, postMain, userID, image, upvotes, downvotes} = req.body

  //add post to db
  const user = await User.findOne({username: userID})
  if(user) {
    try {
      const post = await Post.create({postTitle, postMain, userID, image, upvotes, downvotes})
      res.status(200).json(post)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  else {
    res.status(400).json({error: 'USER DNE'})
  }
}

const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({createdAt: -1})
  res.status(200).json(posts)
}

const getUserPosts = async (req, res) => {
  const {userID} = req.body
  const posts = await Post.find({userID: userID}).sort({createdAt: -1})
  res.status(200).json(posts)
}

const deletePosts = async (req, res) => {
  const { id } = req.body

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'INVALID ID (POST)'})
  }

  const post = await Post.findOneAndDelete({_id: id})

  if(!post) {
    return res.status(404).json({error: 'POST COULD NOT BE DELETED'})
  }

  res.status(200).json('POST DELETED')
}

module.exports = {
  createPost,
  getAllPosts,
  deletePosts,
  getUserPosts
};
