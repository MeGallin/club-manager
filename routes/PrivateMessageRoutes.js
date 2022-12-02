const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const {
  adminPrivateMessageCreate,
  adminPrivateMessageDelete,
  adminPrivateMessageEdit,
  adminPrivateMessagesGet,
  userPrivateMessageGet,
  userPrivateMessagesGet,
  userPrivateMessageReplyPost,
} = require('../controllers/PrivateMessagesController');

router
  .route('/admin/private-message-create/:id')
  .post(protect, admin, adminPrivateMessageCreate);

router
  .route('/admin/private-message-delete/:id')
  .delete(protect, admin, adminPrivateMessageDelete);

router
  .route('/admin/private-message-edit/:id')
  .patch(protect, admin, adminPrivateMessageEdit);

router
  .route('/admin/private-messages-get')
  .get(protect, admin, adminPrivateMessagesGet);

//USERS
router
  .route('/user/private-message-get/:id')
  .get(protect, userPrivateMessageGet);

router
  .route('/user/private-messages-get/:id')
  .get(protect, userPrivateMessagesGet);

router
  .route('/user/private-message-reply-create/:id')
  .post(protect, userPrivateMessageReplyPost);

module.exports = router;
