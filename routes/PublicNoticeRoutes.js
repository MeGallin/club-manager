const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const {
  adminCreatePublicNotice,
  getPublicNotices,
  getPublicNotice,
  adminEditPublicNotice,
  deletePublicNotice,
} = require('../controllers/PublicNoticeController');

router
  .route('/admin/public-notice-create')
  .post(protect, admin, adminCreatePublicNotice);
router.route('/public-notices').get(getPublicNotices);
router.route('/public-notice/:id').get(getPublicNotice);
router
  .route('/admin/public-notice-edit/:id')
  .put(protect, admin, adminEditPublicNotice);
router
  .route('/admin/public-notice-delete/:id')
  .delete(protect, admin, deletePublicNotice);

module.exports = router;
