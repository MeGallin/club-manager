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
    ageGroup,
    team,
    villageName,
    governmentId,
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
      await Player.create({
        user,
        name,
        shirtNumber,
        nameOnShirt,
        ageGroup,
        team,
        villageName,
        governmentId,
        dateOfBirth,
        startDate,
        endDate,
        renewalMethod,
        status,
        uniform,
        email,
        notes,
      });

      res.status(200).json({ success: true });
    }
  } catch (error) {
    next(error);
  }
};

// @description: GET ALL PLAYERS PROFILES
// @route: GET /api/admin/players
// @access: ADMIN && PRIVATE
exports.adminGetPlayers = async (req, res, next) => {
  const players = await Player.find({});
  try {
    if (players) {
      res.status(200).json({ success: true, players });
    } else {
      return next(new ErrorResponse('No players could be found', 500));
    }
  } catch (error) {
    next(error);
  }
};

// @description: EDIT and UPDATE A players profile
// @route: GET /api/admin/player-edit/:id
// @access: ADMIN && PRIVATE
exports.adminEditPlayer = async (req, res, next) => {
  const player = await Player.findById(req.params.id);

  try {
    if (player) {
      const playerInfo = {
        name: req.body.name,
        ageGroup: req.body.ageGroup,
        team: req.body.team,
        shirtNumber: req.body.shirtNumber,
        nameOnShirt: req.body.nameOnShirt,
        villageName: req.body.villageName,
        governmentId: req.body.governmentId,
        dateOfBirth: req.body.dateOfBirth,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        renewalMethod: req.body.renewalMethod,
        status: req.body.status,
        uniform: req.body.uniform,
        email: req.body.email,
        notes: req.body.notes,
      };

      const updatePlayerProfile = await Player.findByIdAndUpdate(
        req.params.id,
        playerInfo,
        {
          new: true,
        },
      );
      res.status(200).json({ success: true, updatePlayerProfile });
    } else {
      return next(new ErrorResponse('Profile not found', 400));
    }
  } catch (error) {
    next(error);
  }
};

// @description: DELETE a PLAYERS PROFILE
// @route: DELETE /api/admin/players-delete
// @access: ADMIN && PRIVATE
exports.adminDeletePlayer = async (req, res, next) => {
  const player = await Player.findById(req.params.id);
  try {
    if (player) {
      await player.remove();
      res.status(200).json({ success: true });
    } else {
      return next(new ErrorResponse('Profile not found', 401));
    }
  } catch (error) {
    next(error);
  }
};
