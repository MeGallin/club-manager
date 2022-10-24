const mongoose = require('mongoose');
const adminProfileSchema = mongoose.Schema(
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
      required: [false, 'We dont need that info'],
    },
    email: {
      type: String,
      required: [true, 'This needs to a valid email.'],
      unique: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
        'Please provide a valid email address.',
      ],
    },
    phone: {
      type: String,
      unique: true,
      match: [
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        'Enter a valid phone number',
      ],
    },

    description: {
      type: String,
      required: [true, 'Please provide a short description about yourself.'],
    },
  },
  { timestamps: true },
);

const AdminProfile = mongoose.model('AdminProfile', adminProfileSchema);

module.exports = AdminProfile;
