const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const {
  getAllUsers,
  toggleIsAdmin,
  toggleIsSuspended,
  toggleIsCoach,
  toggleIsParent,
  toggleIsPlayer,
} = require('../controllers/adminController');

router.route('/admin/users').get(protect, admin, getAllUsers);
router.route('/admin/user-is-admin/:id').put(protect, admin, toggleIsAdmin);
router
  .route('/admin/user-is-suspended/:id')
  .put(protect, admin, toggleIsSuspended);
router.route('/admin/user-is-coach/:id').put(protect, admin, toggleIsCoach);
router.route('/admin/user-is-parent/:id').put(protect, admin, toggleIsParent);
router.route('/admin/user-is-player/:id').put(protect, admin, toggleIsPlayer);

module.exports = router;
