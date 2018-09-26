var api = require('express').Router();

var posts = require('./posts.js');

api.get('/', function(req, res, next) {
    // res.send() our response here
  });

api.use('/posts', posts);

module.exports = api;