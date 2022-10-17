const mongoose = require('mongoose');

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please provide a your social name.'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'We need to know old you are.'],
    },
    email: {
      type: String,
      required: [false, 'Optional'],
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
        'Please provide a valid email address.',
      ],
    },
    description: {
      type: String,
      required: [true, 'Please provide a short description about yourself.'],
    },
    preferredPosition: {
      type: String,
      required: [true, 'Please tell us your preferred position.'],
    },
    preferredNumber: {
      type: Number,
      required: [true, 'Please tell us your preferred number.'],
    },
  },
  { timestamps: true },
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
