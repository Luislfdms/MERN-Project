const mongoose = require('mongoose')
const Post = require('../models/postModel')
const User = require('../models/userModel')

const sampleController = {
  getSampleData: (req, res) => {
    res.json({ message: 'Sample API route' });
  }
};

const createUser = async (req, res) => {
  const {firstName, lastName, email, username, password, followers, following} = req.body

  //add user to db
  const testUser = await User.find({username: username})
  if(!testUser) {
    try {
      const user = await User.create({firstName, lastName, email, username, password, followers, following})
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  }
  res.status(400).json('USERNAME ALREADY EXISTS')
}

const loginUser = async (req, res) => {
  const {username, password} = req.body

  const user = await User.findOne({username: username, password: password})
  if(!user) {
    return res.status(400).json({error: 'COULD NOT FIND USER'})
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
