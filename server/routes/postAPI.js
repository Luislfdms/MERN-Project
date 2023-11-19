const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  deletePosts,
  getUserPosts
} = require('../controllers/postController');

// Define routes
router.post('/add', createPost);

router.get('/feed', getAllPosts);

router.delete('/deletePost', deletePosts);

router.get('/getUserPosts', getUserPosts);

module.exports = (router);
