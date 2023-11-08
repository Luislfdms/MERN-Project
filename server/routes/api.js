const express = require('express');
const router = express.Router();
const {
  sampleController,
  createPost,
  getAllPosts,
  seeUserStats
} = require('../controllers/sampleController');

// Define routes
router.get('/sample', sampleController.getSampleData);

router.post('/add', createPost);

router.get('/feed', getAllPosts);

// router.get('/user', seeUserStats);

module.exports = (router);
