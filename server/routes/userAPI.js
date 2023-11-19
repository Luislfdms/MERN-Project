const express = require('express');
const router = express.Router();
const {
  createUser,
  loginUser,
  deleteUser,
  // seeUserStats,
  updatePassword
} = require('../controllers/userController');

// Define routes
router.post('/register', createUser);

router.get('/login', loginUser);

router.delete('/delete', deleteUser);

// router.get('/userStats', seeUserStats);

router.patch('/updatePass', updatePassword)

module.exports = (router);
