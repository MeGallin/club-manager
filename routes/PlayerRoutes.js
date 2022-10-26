const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');

const { adminCreatePlayer } = require('../controllers/PlayerController');

router.route('/admin/player-create').post(protect, admin, adminCreatePlayer);

module.exports = router;
