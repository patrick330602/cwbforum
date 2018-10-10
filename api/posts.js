var Post = require('../models/post');
var Router = require('express').Router();
// use body-parser to handle POST requests
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded();

// accessing a post
Router.get('/:postId', (req, res, next) => {
    // get post ID from request parameters
    var postId = req.params.postId;
    // validate post ID by:
    // 1. checking if ID is an integer
    if (!parseInt(postId)) {
        // if it cannot be converted into an integer,
        // pass request to next handler
        next();
    }
    // 2. checking if such post exists
    Post.findOne({id: postId}, (err, doc) => {
        if (err) throw err;
        // if not, call next()
        if (!doc) {
            next();
        } else {
            // if such post is found,
            // render post view using obtained data
            res.render('post', doc);
        }
    })
});

// creating a new post
Router.post('/new', urlencodedParser, (req, res) => {
    // get request body
    var body = req.body;
    // create a new instance of Post model,
    // and pass in properties obtained from request body.
    // A instance of a model is a document.
    var post = new Post({
        title: body.title,
        author: body.author,
        type: body.type,
        content: body.content,
        createdAt: new Date(),
        modifiedAt: null
    });
    // save the document to database
    // by calling save() on it
    post.save(err => {
        if (err) throw err;
        // TODO: redirect to the newly-created post
        res.redirect('/');
    });
});

// modifying an existing post
Router.post('/:postId/modify', urlencodedParser, (req, res) => {
    var postId = req.params.postId;
    var body = req.body;
    // update the post with specified ID.
    // alternative: findOneAndUpdate(),
    // which returns the original/updated document
    Post.updateOne(
        // find post
        { postId: postId },
        // supply updates
        {
            // use $set to update specific fields
            // without affecting others
            $set: {
                content: body.content,
                modifiedAt: new Date()
            }
        },
        err => {
            if (err) throw err;
            // redirect to post page
            res.redirect(`/posts/${postId}`);
        }
    );
})

// remove a post
// TODO: work out front-end
Router.delete('/:postId/delete', (req, res) => {
    // get ID of the post to delete
    var postId = req.params.postId;
    Post.deleteOne({ postId: postId }, (err) => {
        if (err) throw err;
        // TODO: figure out which page to direct to
        res.redirect('/');
    });
});

module.exports = Router;