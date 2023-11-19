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
  try {
    const user = await User.create({firstName, lastName, email, username, password, followers, following})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = {
  createUser
};
