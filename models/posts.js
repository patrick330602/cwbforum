const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define schema for posts,
// i.e. what keys a post document will contain
const postSchema = new Schema({
    title: String,
    author: String,
    type: Number,
    content: String,
    createdAt: Date,
    modifiedAt: Date
});

// define model, i.e. document constructor,
// based on schema just created
const Post = mongoose.model('post', postSchema);

module.exports = Post;