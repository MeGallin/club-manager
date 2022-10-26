const Player = require('../models/PlayerModel');
const ErrorResponse = require('../utils/errorResponse');

// @description: Create a new PLAYER Profile
// @route: POST /api/admin/player-create/
// @access: ADMIN && PRIVATE
exports.adminCreatePlayer = async (req, res, next) => {
  const user = req.user._id;

  const {
    name,
    shirtNumber,
    nameOnShirt,
    villageName,
    GovernmentId,
    dateOfBirth,
    startDate,
    endDate,
    renewalMethod,
    status,
    uniform,
    email,
    notes,
  } = req.body;

  // if profile already exists, create
  const playerExists = await Player.findOne({ name: req.body.email });
  try {
    if (playerExists) {
      return next(new ErrorResponse('Profile already exists', 500));
    } else {
      const player = await Player.create({
        name,
        shirtNumber,
        nameOnShirt,
        villageName,
        GovernmentId,
        dateOfBirth,
        startDate,
        endDate,
        renewalMethod,
        status,
        uniform,
        email,
        notes,
      });

      res.status(200).json({ success: true, player });
    }
  } catch (error) {
    next(error);
  }
};
