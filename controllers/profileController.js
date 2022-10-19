const Profile = require('../models/ProfileModel');
const ErrorResponse = require('../utils/errorResponse');

// @description: Create a new PROFILE
// @route: POST /api/profile/
// @access: PRIVATE
exports.createProfile = async (req, res, next) => {
  // if profile already exists, create
  const profileExists = await Profile.findOne({ name: req.body.email });

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

// @description: Get PROFILE
// @route: GET /api/profile/:id
// @access: PRIVATE
exports.getProfile = async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.params.id });

  try {
    if (!profile) {
      return next(new ErrorResponse('Profile does not exist', 500));
    } else {
      res.status(200).json({ success: true, profile });
    }
  } catch (error) {
    return next(new ErrorResponse('Profile does not exist', 500));
  }
};

// @description: Edit PROFILE details
// @route: PUT /api/profile-edit/:id
// @access: PRIVATE
exports.editProfile = async (req, res, next) => {
  const profile = await Profile.findById(req.params.id);

  try {
    if (profile) {
      const info = {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        description: req.body.description,
        preferredPosition: req.body.preferredPosition,
        preferredNumber: req.body.preferredNumber,
      };

      const updatedInfo = await Profile.findByIdAndUpdate(req.params.id, info, {
        new: true,
      });

      res.status(200).json({ success: true, updatedInfo });
    } else {
      return next(new ErrorResponse('Profile ot found', 400));
    }
  } catch (error) {
    next(error);
  }
};
