const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Post = require('../models/postModel')
const User = require('../models/userModel')
const emailValidation = require('../nodeMailer/nodeMailer')
const crypto = require('crypto');

function generateVerificationToken() {
  return crypto.randomBytes(32).toString('hex');
}

const sampleController = {
  getSampleData: (req, res) => {
    res.json({ message: 'Sample API route' });
  }
};

const verify = async (req, res) => {
  const { verificationToken } = req.query || req.body; 

  const user = await User.findOne({ verificationToken});

  if (user) {
    if (!user.verified) {
      console.log('updating user')
      // Mark the user as verified
      await User.findOneAndUpdate({ verificationToken }, { $set: { verified: true }, $unset: { verificationToken: 1 } });
      return res.status(200).json('User verified');
    } else {
      return res.status(400).json('User already verified');
    }
  } else {
    return res.status(404).json('User not found');
  }
}

const nodeMailer = async(req, res) => {
  const {email, verificationToken} = req.body
  const testUser = await User.findOne({verificationToken: verificationToken, email: email})
  if(testUser){
    emailValidation(email, verificationToken)
    return res.status(200).json('email sent')
  }
  return res.status(400).json('USER DNE')
}

const createUser = async (req, res) => {
  const {firstName, lastName, email, username, password, followers, following, description} = req.body

  //add user to db
  const testUser = await User.findOne({username: username})
  const testEmail = await User.findOne({email: email})
  const verified = false;
  const verificationToken = generateVerificationToken();
  console.log(firstName, ',',  lastName, ',', email, ',', username, ',', password, ',', followers, ',', following,',', verified, ',', description);
  if(!testUser) {
    if(!testEmail){
      try {
        const user = await User.create({firstName, lastName, email, username, password, followers, following, verified, verificationToken, description})
        await emailValidation(email, verificationToken)
        return res.status(200).json('user created')
      } catch (error) {
        return res.status(400).json({error: error.message})
      }
    }
    return res.status(400).json('EMAIL ALREADY EXISTS')
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
    emailValidation(username, password)
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
    return res.status(404).json({error: 'USER COULD NOT BE DELETED'})
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
  const {username} = req.params

  const user = await User.findOne({username: username})
  if(!user) {
    return res.status(400).json({error: 'COULD NOT FIND USER'})
  }
  res.status(200).json(user)
}

const followUser = async (req, res) => {
  const {username, requested} = req.body
  const users = await User.find({username: {$in: [username, requested]}})

  if(!users || users.length !== 2) {
    return res.status(400).json({error: 'COULD NOT FIND USER(S)'})
  }

  const currentUser = users.find(user => user.username.includes(username))
  const requested_user = users.find(user => user.username.includes(requested))

  const isFollowing = currentUser.following.includes(requested_user.username);

  if(isFollowing) {
    return res.status(400).json({error: 'USER IS ALREADY FOLLOWING REQUESTED USER'})
  }

  await User.findOneAndUpdate({username: currentUser.username}, {$push: {following: requested_user.username}}, {new: true})
  await User.findOneAndUpdate({username: requested_user.username}, {$push: {followers: currentUser.username}}, {new: true})

  return res.status(200).json('User followed')
}

const unfollowUser = async (req, res) => {
  const {username, requested} = req.body
  const users = await User.find({username: {$in: [username, requested]}})

  if(!users || users.length !== 2) {
    return res.status(400).json({error: 'COULD NOT FIND USER(S)'})
  }

  const currentUser = users.find(user => user.username.includes(username))
  const requested_user = users.find(user => user.username.includes(requested))

  const isFollowing = currentUser.following.includes(requested_user.username);

  if(!isFollowing) {
    return res.status(400).json({error: 'USER IS NOT FOLLOWING REQUESTED USER'})
  }

  await User.findOneAndUpdate({username: currentUser.username}, {$pull: {following: requested_user.username}})
  await User.findOneAndUpdate({username: requested_user.username}, {$pull: {followers: currentUser.username}})

  return res.status(200).json('User unfollowed')
}

const viewFollowers = async (req, res) => {
  const {username} = req.body
  const user = await User.findOne({username: username})
  if(!user) {
    return res.status(400).json('Invalid user')
  }
  return res.status(200).json(user.followers)
}

const viewFollowing = async (req, res) => {
  const {username} = req.body
  const user = await User.findOne({username: username})
  if(!user) {
    return res.status(400).json('Invalid user')
  }
  return res.status(200).json(user.following)
}

const createDescription = async (req, res) => {
  const {username, description} = req.body
  const desc = await User.findOneAndUpdate({username: username}, {description: description})
  if(!desc) {
    return res.status(200).json('Invalid user or description')
  }
  return res.status(200).json('New description added')
}

module.exports = {
  createUser,
  loginUser,
  deleteUser,
  updatePassword,
  seeUserStats,
  verify,
  nodeMailer,
  followUser,
  unfollowUser,
  viewFollowers,
  viewFollowing,
  createDescription,
};
