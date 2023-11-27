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
  console.log(req.body)
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
  const {username} = req.body
  const posts = await Post.find({userID: { $regex: username, $options: 'i'}}).sort({createdAt: -1})
  res.status(200).json(posts)
}

const getTitlePosts = async (req, res) => {
  const {postTitle} = req.body
  const posts = await Post.find({postTitle: { $regex: postTitle, $options: 'i'}}).sort({createdAt: -1})
  res.status(200).json(posts)
}

const viewFollowerPosts = async (req, res) => {
  const {username} = req.body
  const posts = await Post.find({userID: username}).sort({createdAt: -1})
  if(!posts) {
    return res.status(400).json('Invalid user or posts')
  }
  res.status(200).json(posts)
}

const allFollowerPosts = async (req, res) => {
  const {username} = req.body
  const user = await User.findOne({username: username})
  if(!user) {
    return res.status(400).json('Invalid user')
  }

  const following = user.following
  if(!posts) {
    return res.status(400).json('Invalid/No following')
  }

  const posts = await Post.find({userID: {$in: following}}).sort({createdAt: -1})
  if(!posts) {
    return res.status(400).json('Invalid/No posts')
  }
  res.status(200).json(posts)
}

const deletePosts = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'INVALID ID (POST)'})
  }

  const post = await Post.findOneAndDelete({_id: id})

  if(!post) {
    return res.status(404).json({error: 'POST COULD NOT BE DELETED'})
  }

  res.status(200).json('POST DELETED')
}

const upvote = async (req, res) => {
  const {id} = req.body

  const post = await Post.findOne({_id: id})

  if(!post) {
    return res.status(404).json({error: 'POST NOT FOUND'})
  }
  const upvoteUpdate = await Post.findOneAndUpdate({_id: id},{upvotes: post.upvotes + 1})
  res.status(200).json('UPVOTES UPDATED')
}

const downvote = async (req, res) => {
  const {id} = req.body

  const post = await Post.findOne({_id: id})

  if(!post) {
    return res.status(404).json({error: 'POST NOT FOUND'})
  }
  const upvoteUpdate = await Post.findOneAndUpdate({_id: id},{downvotes: post.downvotes + 1})
  res.status(200).json('DOWNVOTES UPDATED')
}

module.exports = {
  createPost,
  getAllPosts,
  deletePosts,
  getUserPosts,
  upvote,
  downvote,
  viewFollowerPosts,
  allFollowerPosts,
  getTitlePosts
};
