const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Post = require('../models/postModel')
const User = require('../models/userModel')

const sampleController = {
  getSampleData: (req, res) => {
    res.json({ message: 'Sample API route' });
  }
};

const createUser = async (req, res) => {
  const {firstName, lastName, email, username, password, followers, following, verified} = req.body

  //add user to db
  const testUser = await User.findOne({username: username})
  console.log(firstName, ',',  lastName, ',', email, ',', username, ',', password, ',', followers, ',', following,',', verified);
  if(!testUser) {
    try {
      const user = await User.create({firstName, lastName, email, username, password, followers, following, verified})
      return res.status(200).json('user created')
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  }
  res.status(400).json('USERNAME ALREADY EXISTS')
}

const loginUser = async (req, res) => {
  const {username, password} = req.body

  // const user = await User.findOne({username: username, password: password})

  const user = await User.findOne({username: username})

  // User auth
  if(!user) {
    return res.status(400).json({error: 'COULD NOT FIND USER'})
  }

  if(!user.verified) {
    return res.status(400).json({error: 'DENIED ACCESS: VERIFY EMAIL'})
  }

  passStatus = await bcrypt.compare(password, user.password)

  if(!passStatus) {
    return res.status(400).json({error: 'INCORRECT PASSWORD'})
  }

  res.status(200).json('login successful')
}

const deleteUser = async (req, res) => {
  const { id } = req.body

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'INVALID ID (USER)'})
  }

  const user = await User.findOneAndDelete({_id: id})

  if(!user) {
    return res.status(404).json({error: 'POST COULD NOT BE DELETED'})
  }

  res.status(200).json('USER DELETED')
}

const updatePassword = async (req, res) => {
  const {username, password} = req.body

  const user = await User.findOneAndUpdate({username: username}, {password: password})

  if(!user) {
    return res.status(404).json({error: 'USER NOT FOUND'})
  }

  res.status(200).json('PASSWORD UPDATED')
}

const seeUserStats = async (req, res) => {
  const {username} = req.body

  const user = await User.findOne({username: username})
  if(!user) {
    return res.status(400).json({error: 'COULD NOT FIND USER'})
  }
  res.status(200).json(user)
}


module.exports = {
  createUser,
  loginUser,
  deleteUser,
  updatePassword,
  seeUserStats
};
