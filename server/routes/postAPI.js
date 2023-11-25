const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  deletePosts,
  getUserPosts,
  downvote,
  upvote,
  viewFollowerPosts
} = require('../controllers/postController');

// Define routes
router.post('/add', createPost);

router.get('/feed', getAllPosts);

router.delete('/deletePost', deletePosts);

router.get('/getUserPosts', getUserPosts);

router.patch('/downvote', downvote);

router.patch('/upvote', upvote);

router.get('/followerPosts', viewFollowerPosts);

module.exports = (router);
