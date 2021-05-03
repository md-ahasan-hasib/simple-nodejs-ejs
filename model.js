const mongoose = require('mongoose');

const registrationSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number},
    phone: { type: Number},
    bio: { type: String, default: '' },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', registrationSchema);

module.exports = User;
