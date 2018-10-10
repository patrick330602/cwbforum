const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const commentsSchema = new Schema({
    belongTo: String,
    author: String,
    content: String,
    createdAt: Date,
    modifiedAt: Date
});

const Comments = mongoose.model('comment', commentsSchema);

module.exports = Comments;