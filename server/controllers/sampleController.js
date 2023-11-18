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

module.exports = {
  sampleController,
  createPost,
  getAllPosts,
};
