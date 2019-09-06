const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  },
  wins: {
    type: Number
  },
  losses: {
    type: Number
  },
  rank: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);