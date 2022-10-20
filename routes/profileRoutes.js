const express = require('express');
const router = express.Router();
const {
  createProfile,
  getProfile,
  editProfile,
  deleteProfile,
} = require('../controllers/profileController');
const { protect } = require('../middleware/auth');

router.route('/profile/:id').get(protect, getProfile);
router.route('/profile').post(protect, createProfile);
router.route('/profile-edit/:id').put(protect, editProfile);
router.route('/profile-delete/:id').delete(protect, deleteProfile);

module.exports = router;
