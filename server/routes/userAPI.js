const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
  createUser,
  loginUser,
  deleteUser,
  seeUserStats,
  updatePassword,
  verify,
  nodeMailer,
  followUser,
  unfollowUser,
  viewFollowers,
  viewFollowing,
  createDescription,
} = require('../controllers/userController');

router.use(cors());

// Define routes
router.post('/register', createUser);

router.post('/login', loginUser);

router.delete('/delete', deleteUser);

router.get('/user/:username', seeUserStats);

router.patch('/updatePass', updatePassword);
 
router.get('/verify', verify);

router.get('/nodemailer', nodeMailer);

router.patch('/follow', followUser);

router.patch('/unfollow', unfollowUser);

router.get('/followers', viewFollowers);

router.get('/following', viewFollowing);

router.patch('/description', createDescription);

module.exports = (router);
