const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Register new user
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Register User' })
});

// Login user
const loginUser = asyncHandler(async(req, res) => {
  res.json({ message: 'Login User' })
});

// Get user data
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: 'User data display' })
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
}
