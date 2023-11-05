const express = require('express');
const router = express.Router();
const {
  sampleController,
  createPost,
  getAllPosts
} = require('../controllers/sampleController');

// Define routes
router.get('/sample', sampleController.getSampleData);

router.post('/add', createPost);

router.get('/feed', getAllPosts);

module.exports = (router);
