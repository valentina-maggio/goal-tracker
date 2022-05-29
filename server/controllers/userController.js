// Register new user
const registerUser = (req, res) => {
  res.json({ message: 'Register User' })
};

// Login user
const loginUser = (req, res) => {
  res.json({ message: 'Login User' })
};

// Get user data
const getUser = (req, res) => {
  res.json({ message: 'User data display' })
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
}
