const mongoose = require('mongoose');

const privateMessageReplySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
    },
    message: {
      type: String,
      required: [true, 'This cant be left empty.'],
    },
    from: {
      type: String,
      required: [true, "From field can't be left empty."],
    },
  },
  { timestamps: true },
);

const privateMessageSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },
    to: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
    },
    message: {
      type: String,
      required: [true, 'This cant be left empty.'],
    },
    from: {
      type: String,
      required: [true, "From field can't be left empty."],
    },
    privateMessageReply: [privateMessageReplySchema],
  },
  { timestamps: true },
);

const PrivateMessage = mongoose.model('PrivateMessage', privateMessageSchema);

module.exports = PrivateMessage;
