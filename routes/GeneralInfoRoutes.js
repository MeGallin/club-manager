const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const {
  adminCreateGeneralIfo,
  adminGetGeneralInfo,
  adminEditGeneralInfo,
  adminDeleteGeneralInfo,
} = require('../controllers/GeneralInfoController');

router
  .route('/admin/general-info-create')
  .post(protect, admin, adminCreateGeneralIfo);
router.route('/admin/general-info').get(protect, adminGetGeneralInfo); //Posts for all users
router
  .route('/admin/general-info-edit/:id')
  .put(protect, admin, adminEditGeneralInfo);
router
  .route('/admin/general-info-delete/:id')
  .delete(protect, admin, adminDeleteGeneralInfo);

module.exports = router;
