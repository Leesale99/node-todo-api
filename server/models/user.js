const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    minLength: 1,
    required: true
  }
});

module.exports = { User };
