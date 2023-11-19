const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  deletePosts
} = require('../controllers/postController');

// Define routes
router.post('/add', createPost);

router.get('/feed', getAllPosts);

router.delete('/deletePost', deletePosts);

module.exports = (router);
