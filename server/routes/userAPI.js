const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
  createUser,
  loginUser,
  deleteUser,
  seeUserStats,
  updatePassword,
  verify
} = require('../controllers/userController');

router.use(cors());

// Define routes
router.post('/register', createUser);

router.post('/login', loginUser);

router.delete('/delete', deleteUser);

router.get('/user', seeUserStats);

router.patch('/updatePass', updatePassword);
 
router.patch('/verify', verify);

module.exports = (router);
