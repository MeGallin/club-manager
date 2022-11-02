const mongoose = require('mongoose');

const playerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please provide a your name.'],
    },
    shirtNumber: {
      type: Number,
      required: [true, 'Please tell us your preferred number.'],
    },
    nameOnShirt: {
      type: String,
      required: [true, 'Please provide a ame for your shirt.'],
    },
    ageGroup: {
      type: String,
      required: [true, 'Please tell which age group you fall under.'],
    },
    team: {
      type: String,
      required: [true, 'Please tell us which team you play for.'],
    },
    villageName: {
      type: String,
      required: [true, 'Tell us where you live.'],
    },
    governmentId: {
      type: String,
      required: [true, 'Tell us where you live.'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'We need to know old you are.'],
    },
    startDate: {
      type: String,
      required: [true, 'Tell whe you started.'],
    },
    endDate: {
      type: String,
      required: [false, 'Tell us when you left'],
    },
    renewalMethod: {
      type: String,
      required: [true, 'Manual or online renewal'],
    },
    status: {
      type: String,
      required: [true, 'Renewed, new or pending'],
    },
    uniform: {
      type: Boolean,
      required: [true, 'Renewed, new or pending'],
      default: false,
    },
    email: {
      type: String,
      required: [true, 'We need this to make sure its you.'],
      unique: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
        'Please provide a valid email address.',
      ],
    },
    notes: {
      type: String,
      required: [false, 'Please provide a short description about yourself.'],
    },
  },
  { timestamps: true },
);

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
