const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const boardsSchema = new Schema({
    type: Number,
    title: String,
    intro: String,
    description: String,
    // to be clarified
    StickyPostsIds: [ObjectId]
});

const Board = mongoose.model('board', boardsSchema);

module.exports = Board;