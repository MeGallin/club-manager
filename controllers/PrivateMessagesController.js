const PrivateMessage = require('../models/PrivateMessagesModel');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// @description: Create a new Message
// @route: POST /api/admin/private-message-create/:id
// @access: ADMIN && PRIVATE
exports.adminPrivateMessageCreate = async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });
  const { title, message, from } = req.body;
  // Add email option here
  try {
    if (!title && !message && !from)
      return next(new ErrorResponse('Provide all fields please', 401));
    await PrivateMessage.create({
      user,
      to: user.username,
      title,
      message,
      from,
      isComplete: false,
      privateMessageReply: [],
    });
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

// @description: Delete a message
// @route: GET /api/admin/private-message-delete/:id
// @access: ADMIN & PRIVATE
exports.adminPrivateMessageDelete = async (req, res, next) => {
  const message = await PrivateMessage.findOne({ _id: req.params.id });
  try {
    if (!message) return next(new ErrorResponse('Message not found', 401));
    await message.remove();
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

// @description: EDIT a message
// @route: GET /api/admin/private-message-edit/:id
// @access: ADMIN & PRIVATE
exports.adminPrivateMessageEdit = async (req, res, next) => {
  const message = await PrivateMessage.findOne({ _id: req.params.id });
  try {
    if (!message) return next(new ErrorResponse('Message not found', 401));

    const info = {
      title: req.body.title,
      message: req.body.message,
      from: req.body.from,
    };

    const updatedMessage = await PrivateMessage.findByIdAndUpdate(
      req.params.id,
      info,
      {
        new: true,
      },
    );
    res.status(200).json({ success: true, updatedMessage });
  } catch (error) {
    next(error);
  }
};

// @description: Get all Messages
// @route: GET /api/admin/private-messages-get
// @access: PRIVATE && ADMIN
exports.adminPrivateMessagesGet = async (req, res, next) => {
  const messages = await PrivateMessage.find({}).sort({
    createdAt: -1,
  });
  try {
    if (!messages)
      return next(new ErrorResponse('No messages could be found', 401));
    res.status(200).json({ success: true, messages });
  } catch (error) {
    next(error);
  }
};

// @description: Handle isComplete
// @route: GET /api/admin/private-messages-isComplete/id
// @access: PRIVATE && ADMIN
exports.adminPrivateMessageIsComplete = async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });
  const message = await PrivateMessage.findOne({ _id: req.body.messageId });
  try {
    if (!user && !message)
      return next(new ErrorResponse('No message could be found', 401));

    await PrivateMessage.findByIdAndUpdate(
      req.body.messageId,
      { isComplete: req.body.isComplete },
      {
        new: true,
      },
    );
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

// USER USER USER

// @description: Get a Message
// @route: GET /api/user/private-message-get/:id
// @access: PRIVATE
exports.userPrivateMessageGet = async (req, res, next) => {
  const message = await PrivateMessage.findOne({ _id: req.params.id });
  try {
    if (!message)
      return next(new ErrorResponse('No message could be found', 500));

    res.status(200).json({ success: true, message });
  } catch (error) {
    next(error);
  }
};

// @description: Get all your messages
// @route: GET /api/user/private-messages-get/:id
// @access: PRIVATE
exports.userPrivateMessagesGet = async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });
  const messages = await PrivateMessage.find({ user }).sort({
    createdAt: -1,
  });
  try {
    if (!user && !messages)
      return next(new ErrorResponse('No messages could be found', 500));
    res.status(200).json({ success: true, messages });
  } catch (error) {
    next(error);
  }
};

// @description: Create REply Message
// @route: GET /api/user/private-message-reply-create
// @access: PRIVATE
exports.userPrivateMessageReplyPost = async (req, res, next) => {
  const { messageId } = req.body;
  const user = await User.findOne({ _id: req.params.id });
  const messages = await PrivateMessage.find({ user: user._id });
  //Find the message that is expecting a reply
  const foundMessage = messages.filter((message) => {
    if (message._id.toString() === messageId.toString()) {
      return message;
    }
    return false;
  });

  try {
    if (!user && !foundMessage)
      return next(new ErrorResponse('No messages could be found', 500));
    const reply = {
      title: req.body.title,
      message: req.body.message,
      from: user.username,
    };
    foundMessage[0].privateMessageReply.push(reply);
    await foundMessage[0].save();
    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};
