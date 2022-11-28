const express = require('express');
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
  getUserAdminDetails,
  userUpdateAdminDetails,
  googleLogin,
} = require('../controllers/auth');

const { protect } = require('../middleware/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/google-login').post(googleLogin);
router.route('/forgot-password').post(forgotPassword);
router.route('/resetpassword/:token').put(resetPassword);
router.route('/user-admin-details').get(protect, getUserAdminDetails);
router.route('/user/:id').put(protect, userUpdateAdminDetails);

module.exports = router;
