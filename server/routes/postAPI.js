const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  deletePosts,
  getUserPosts,
  downvote,
  upvote,
  viewFollowerPosts,
  allFollowerPosts,
  getTitlePosts
} = require('../controllers/postController');

// Define routes
router.post('/add', createPost);

router.get('/feed', getAllPosts);

router.delete('/deletePost/:id', deletePosts);

router.get('/getUserPosts', getUserPosts);

router.patch('/downvote', downvote);

router.patch('/upvote', upvote);

router.get('/followerPosts', viewFollowerPosts);

router.get('/allFollowerPosts', allFollowerPosts);

router.get('/getTitlePosts', getTitlePosts);

module.exports = (router);
