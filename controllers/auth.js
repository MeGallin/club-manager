const crypto = require('crypto');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    try {
      const link = `${
        process.env.MAILER_LOCAL_URL
      }api/confirm-email/${generateToken(user._id)}`;
      const message = `<h1>Hi ${username}</h1><p>You have successfully registered with Club Manager</p><p>Please click the link below to verify your email address.</p><h4>Please note, in order to get full functionality you must confirm your mail address with the link below.</h4></p><p><a href=${link} id='link'>Click here to verify</a></p><p>Thank you Your Corporate Memory management</p>`;

      // Send Email
      sendEmail({
        from: process.env.MAILER_FROM,
        to: user.email,
        subject: 'Club Manager Registration',
        html: message,
      });

      res
        .status(200)
        .json({ success: true, data: `Email sent successfully ${link}` });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse('Email could not be set', 500));
    }
  } catch (error) {
    next(error);
  }
};

// Generate a secret token for the user
const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

//Google Login
exports.googleLogin = async (req, res, next) => {
  token = req.body.headers.Authorization.split(' ')[1];

  try {
    if (token?.sub) {
      const googleToken = jwt.decode(token);
      //check if email exist
      const existingUser = await User.findOne({ email: googleToken?.email });
      if (existingUser === null) {
        // Create user
        const user = await User.create({
          username: googleToken?.name,
          email: googleToken?.email,
          password: googleToken?.email + process.env.JWT_SECRET,
          isConfirmed: true,
          registeredWithGoogle: true,
        });

        await user.save();
        sendToken(user, 200, res);
      } else {
        //Login
        const user = await User.findOne({ email: googleToken?.email });
        sendToken(user, 200, res);
      }
    } else {
      return next(new ErrorResponse('Your login was un-successful', 500));
    }
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

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

//Forgot PW
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return next(new ErrorResponse('Email could not be set', 404));

    try {
      const resetToken = user.getResetPasswordToken();
      await user.save();
      const resetUrl = `${process.env.RESET_PASSWORD_LOCAL_URL}#/password-reset/${resetToken}`;
      const message = `<h1>You have requested a password reset.</h1><p>Please click on the following link to reset your password.</p><p><a href=${resetUrl} id='link'>Click here to verify</a></p>`;
      // Send Email

      sendEmail({
        from: process.env.MAILER_FROM,
        to: user.email,
        subject: 'Password Reset Request',
        html: message,
      });

      res.status(200).json({ success: true, data: `Email sent successfully` });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse('Email could not be set', 500));
    }
  } catch (error) {
    next(error);
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  try {
    const user = await User.findOne({
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return next(new ErrorResponse('Invalid Reset Token', 400));

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res
      .status(200)
      .json({ success: true, data: 'Password was successfully changed.' });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res
    .status(statusCode)
    .json({ success: true, token, username: user.username });
};

// @description: Get user data of logged in in user
// @route: GET /api/auth/user
// @access: PRIVATE
exports.getUserAdminDetails = async (req, res, next) => {
  try {
    const {
      _id,
      username,
      email,
      isAdmin,
      isCoach,
      isPlayer,
      isParent,
      isConfirmed,
      isSuspended,
      registeredWithGoogle,
      createdAt,
      updatedAt,
    } = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      _id,
      username,
      email,
      isAdmin,
      isCoach,
      isPlayer,
      isParent,
      isConfirmed,
      isSuspended,
      registeredWithGoogle,
      createdAt,
      updatedAt,
    });
  } catch (error) {
    next(error);
  }
};

// @description: USER ADMIN DETAIL UPDATE
// @route: PUT /api/auth/user/:id
// @access: Private
exports.userUpdateAdminDetails = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user) return new ErrorResponse('User not found', 400);
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();

    res.json({
      success: true,
      updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
