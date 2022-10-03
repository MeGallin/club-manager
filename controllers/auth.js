const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

//LOGIN
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and Password', 400));
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return next(new ErrorResponse('Please provide valid credentials', 401));
    }

    const isMatched = await user.matchPasswords(password);

    if (!isMatched) {
      return next(new ErrorResponse('Please provide valid credentials', 401));
    }

    res.status(200).json({
      success: true,
      token: 'EFFE$$%£%$%4£"FWfwEf',
    });
  } catch (error) {
    next(error);
  }
};
exports.forgotPassword = (req, res, next) => {
  res.send('Forgot password Route');
};
exports.resetPassword = (req, res, next) => {
  res.send('Reset password Route');
};
