const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    password: String,
    wechatId: String,
    wechatAccessToken: String,
    wechatRefreshToken: String,
    email: String,
    // 0: unauthorized
    // 1: limited
    // 2: authorized
    category: Number
});

const User = mongoose.model('user', usersSchema);

module.exports = User;