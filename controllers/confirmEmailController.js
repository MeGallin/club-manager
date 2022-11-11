const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

// @description: Confirmation Email
// @route: GET /confirm-email/:token
// @access: public
exports.confirmEmail = async (req, res) => {
  const decodedToken = jwt.verify(
    req.params.token,
    process.env.JWT_SECRET,
    function (err, decoded) {
      return decoded.id;
    },
  );

  const user = await User.findById(decodedToken);

  if (user) {
    user.isConfirmed = true;
    await user.save();
    if (process.env.NODE_ENV === 'production') {
      return res.redirect('http://clubmanager.livenotice.co.uk');
    } else {
      return res
        .status(200)
        .send({ message: 'Your Account has been Verified.' });
    }
  } else {
    return next(new ErrorResponse('No user found', 404));
  }
};
