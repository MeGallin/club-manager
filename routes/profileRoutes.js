const express = require('express');
const router = express.Router();
const {
  createProfile,
  getProfile,
} = require('../controllers/profileController');
const { protect } = require('../middleware/auth');

router.route('/profile/:id').get(protect, getProfile);
router.route('/profile').post(protect, createProfile);

module.exports = router;
