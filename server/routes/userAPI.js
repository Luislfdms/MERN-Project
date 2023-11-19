const express = require('express');
const router = express.Router();
const {
  createUser,
  // getPostsUser,
  // seeUserStats,
  // deleteUser,
  // updatePassword,
  // loginUser
} = require('../controllers/userController');

// Define routes
router.post('/register', createUser);

// router.get('/login', loginUser);

// router.delete('/deleteUser/:id', deleteUser);

// router.get('/getPostsUser', getPostsUser);

// router.get('/userStats', seeUserStats);

// router.patch('/updatePass', updatePassword)

module.exports = (router);
