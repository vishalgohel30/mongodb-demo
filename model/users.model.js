const mongoose = require('mongoose');

var Users = mongoose.model('users', {
    name: { type: String },
    address: { type: String },
    city: {
        type: String,
        required: true
    }
});

module.exports = { Users };

