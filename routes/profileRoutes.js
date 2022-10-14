const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/profileController');
const { protect } = require('../middleware/auth');

router.route('/profile').post(protect, createProfile);

module.exports = router;
