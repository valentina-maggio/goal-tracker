// Get goals
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' });
};

// Set goals
const setGoal = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text field');
  }

  res.status(200).json({ message: 'Set goals' });
};

// Update goals
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// Delete goals
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};


module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}