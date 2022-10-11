const express = require('express');
const { confirmEmail } = require('../controllers/confirmEmailController');

const router = express.Router();

router.route('/confirm-email/:token').get(confirmEmail);

module.exports = router;
