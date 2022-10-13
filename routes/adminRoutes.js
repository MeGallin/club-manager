const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const {
  getAllUsers,
  toggleIsAdmin,
} = require('../controllers/adminController');

router.route('/admin/users').get(protect, admin, getAllUsers);
router.route('/admin/user-is-admin/:id').put(protect, admin, toggleIsAdmin);

module.exports = router;
