const Profile = require('../models/ProfileModel');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @description: Create a new PROFILE
// @route: POST /api/profile/
// @access: PRIVATE
exports.createProfile = async (req, res, next) => {
  // if profile already exists, create
  const profileExists = await Profile.findOne({ name: req.body.name });

  const {
    name,
    dateOfBirth,
    email,
    description,
    preferredPosition,
    preferredNumber,
  } = req.body;
  const user = req.user._id;

  if (profileExists) {
    return next(new ErrorResponse('Profile already exists', 500));
  } else {
    try {
      const profile = await Profile.create({
        user,
        name,
        dateOfBirth,
        email,
        description,
        preferredPosition,
        preferredNumber,
      });

      res.status(200).json({ success: true, profile });
    } catch (error) {
      return next(new ErrorResponse('Profile not created', 500));
    }
  }

  next();
};
