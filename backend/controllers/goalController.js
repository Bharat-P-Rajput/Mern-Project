// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get Goal" });
};

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res, next) => {
  if (!req.body.text) {
    const error = new Error("Please add a text field");
    res.status(400);
    return next(error); // Pass the error to middleware
  }
  res.status(200).json({ message: "Set Goal" });
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
