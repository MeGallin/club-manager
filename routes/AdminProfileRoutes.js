const express = require('express');
const router = express.Router();

const {
  createAdminProfile,
  getAdminProfile,
  editAdminProfile,
  deleteAdminProfile,
} = require('../controllers/AdminProfileController');
const { protect, admin } = require('../middleware/auth');

router.route('/admin/profile-create').post(protect, admin, createAdminProfile);
router
  .route('/admin/profile-delete/:id')
  .delete(protect, admin, deleteAdminProfile);
router.route('/admin/profile/:id').get(protect, admin, getAdminProfile);
router.route('/admin/profile-edit/:id').put(protect, admin, editAdminProfile);

module.exports = router;
