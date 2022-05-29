const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// Get goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// Set goals
const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text field');
  }

  res.status(200).json({ message: 'Set goals' });
});

// Update goals
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// Delete goals
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});


module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
