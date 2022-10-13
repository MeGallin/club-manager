const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const {
  getAllUsers,
  toggleIsAdmin,
  toggleIsSuspended,
} = require('../controllers/adminController');

router.route('/admin/users').get(protect, admin, getAllUsers);
router.route('/admin/user-is-admin/:id').put(protect, admin, toggleIsAdmin);
router
  .route('/admin/user-is-suspended/:id')
  .put(protect, admin, toggleIsSuspended);

module.exports = router;
