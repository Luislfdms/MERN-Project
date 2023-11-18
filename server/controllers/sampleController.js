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
  try {
    const post = await Post.create({postTitle, postMain, userID, image, upvotes, downvotes})
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({createdAt: -1})
  res.status(200).json(posts)
}

const deletePosts = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'POST DNE'})
  }

  const post = await Post.findOneAndDelete({_id: id})

  if(!post) {
    return res.status(404).json({error: 'POST COULD NOT BE DELETED'})
  }

  res.status(200).json('POST DELETED')
}

module.exports = {
  sampleController,
  createPost,
  getAllPosts,
  deletePosts
};
