const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const {
  adminCreatePlayer,
  adminGetPlayers,
  adminEditPlayer,
  adminDeletePlayer,
} = require('../controllers/PlayerController');

router.route('/admin/player-create').post(protect, admin, adminCreatePlayer);
router.route('/admin/player-edit/:id').put(protect, admin, adminEditPlayer);
router
  .route('/admin/player-delete/:id')
  .delete(protect, admin, adminDeletePlayer);
router.route('/admin/players').get(protect, admin, adminGetPlayers);

module.exports = router;
