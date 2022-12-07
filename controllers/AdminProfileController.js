const AdminProfile = require('../models/AdminProfileModel');
const ErrorResponse = require('../utils/errorResponse');

// @description: Create a new ADMIN PROFILE
// @route: POST /api/admin/profile-create/
// @access: ADMIN && PRIVATE
exports.createAdminProfile = async (req, res, next) => {
  const user = req.user._id;
  const { name, dateOfBirth, email, phone, description } = req.body;

  // if profile already exists, create
  const profileExists = await AdminProfile.findOne({ name: req.body.email });
  try {
    if (profileExists)
      return next(new ErrorResponse('Profile already exists', 500));
    const profile = await AdminProfile.create({
      user,
      name,
      dateOfBirth,
      email,
      phone,
      description,
    });
    res.status(200).json({ success: true, profile });
  } catch (error) {
    next(error);
  }
};

// @description: GET Logged in ADMIN PROFILE
// @route: POST /api/profile/:id
// @access: ADMIN && PRIVATE
exports.getAdminProfile = async (req, res, next) => {
  const profile = await AdminProfile.findOne({ _id: req.params.id });
  try {
    if (!profile) return next(new ErrorResponse('Profile does not exist', 500));
    res.status(200).json({ success: true, profile });
  } catch (error) {
    next(error);
  }
};

// @description: Edit ADMIN PROFILE details
// @route: PUT /api/admin/profile-edit/:id
// @access: ADMIN && PRIVATE
exports.editAdminProfile = async (req, res, next) => {
  const profile = await AdminProfile.findById(req.params.id);
  try {
    if (!profile) return next(new ErrorResponse('Profile not found', 400));
    const info = {
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
    };

    const updateAdminProfileDetails = await AdminProfile.findByIdAndUpdate(
      req.params.id,
      info,
      {
        new: true,
      },
    );

    res.status(200).json({ success: true, updateAdminProfileDetails });
  } catch (error) {
    next(error);
  }
};

// @description: GET ALL ADMIN PROFILES
// @route: PUT /api/admin/profiles
// @access: ADMIN && PRIVATE
exports.getAdminProfiles = async (req, res, next) => {
  const profiles = await AdminProfile.find({});
  try {
    if (!profiles)
      return next(new ErrorResponse('No user could be found', 500));
    res.status(200).json({ success: true, profiles });
  } catch (error) {
    next(error);
  }
};

// @description: ADMIN PROFILE Delete
// @route: DELETE /api/admin/profile-delete/:id
// @access: Private
exports.deleteAdminProfile = async (req, res, next) => {
  const profile = await AdminProfile.findById(req.params.id);
  try {
    if (!profile) return next(new ErrorResponse('Profile ot found', 401));
    await profile.remove();
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
