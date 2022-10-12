const User = require('../models/User');

// @description: Get All the Users
// @route: GET /api/admin/users
// @access: Admin and Private

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ success: true, users });
};
