const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const {
  adminCreatePlayer,
  adminGetPlayers,
} = require('../controllers/PlayerController');

router.route('/admin/player-create').post(protect, admin, adminCreatePlayer);
router.route('/admin/players').get(protect, admin, adminGetPlayers);

module.exports = router;
