const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const { getAllUsers } = require('../controllers/adminController');

router.route('/admin/users').get(protect, admin, getAllUsers);

module.exports = router;
