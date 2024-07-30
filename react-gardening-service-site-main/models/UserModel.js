const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
});

const User = mongoose.model('User', messageSchema, 'users');

module.exports={User};