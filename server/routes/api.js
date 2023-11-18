const express = require('express');
const router = express.Router();
const {
  sampleController,
  createPost,
  getAllPosts,
  seeUserStats,
  deletePosts
} = require('../controllers/sampleController');

// Define routes
router.get('/sample', sampleController.getSampleData);

router.post('/add', createPost);

router.get('/feed', getAllPosts);

router.delete('/delete/:id', deletePosts);

// router.get('/user', seeUserStats);

module.exports = (router);
