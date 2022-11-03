const mongoose = require('mongoose');

const generalInfoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    heading: {
      type: String,
      required: [true, 'Please provide a heading.'],
    },
    post: {
      type: String,
      required: [true, 'This cant be left empty.'],
    },
  },
  { timestamps: true },
);

const GeneralInfo = mongoose.model('GeneralInfo', generalInfoSchema);

module.exports = GeneralInfo;
