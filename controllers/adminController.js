const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @description: Get All the Users
// @route: GET /api/admin/users
// @access: Admin and Private
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  try {
    if (!users) return next(new ErrorResponse('No user could be found', 500));
    res.status(200).json({ success: true, users });
  } catch (error) {
    next(error);
  }
};

// @description: Toggle is Admin rights
// @route: GET /api/admin/user-is-admin/:id
// @access: Admin and Private
exports.toggleIsAdmin = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user)
      return next(new ErrorResponse('Could not make your request', 400));
    user.isAdmin = req.body.isAdmin;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: 'Admin changed successfully' });
  } catch (error) {
    next(error);
  }
};

// @description: Toggle is SUSPENDED
// @route: GET /api/admin/user-is-suspended/:id
// @access: Admin and Private
exports.toggleIsSuspended = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user)
      return next(new ErrorResponse('Could not make your request', 400));
    user.isSuspended = req.body.isSuspended;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: 'Suspension changed successfully' });
  } catch (error) {
    next(error);
  }
};

// @description: Toggle is COACH
// @route: GET /api/admin/user-is-coach/:id
// @access: Admin and Private
exports.toggleIsCoach = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user)
      return next(new ErrorResponse('Could not make your request', 400));
    user.isCoach = req.body.isCoach;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: 'Coach changed successfully' });
  } catch (error) {
    next(error);
  }
};

// @description: Toggle is PARENT
// @route: GET /api/admin/user-is-parent/:id
// @access: Admin and Private
exports.toggleIsParent = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user)
      return next(new ErrorResponse('Could not make your request', 400));
    user.isParent = req.body.isParent;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: 'Parent changed successfully' });
  } catch (error) {
    next(error);
  }
};

// @description: Toggle is PLAYER
// @route: GET /api/admin/user-is-player/:id
// @access: Admin and Private
exports.toggleIsPlayer = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user)
      return next(new ErrorResponse('Could not make your request', 400));
    user.isPlayer = req.body.isPlayer;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: 'PLayer changed successfully' });
  } catch (error) {
    next(error);
  }
};
