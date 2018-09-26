var postrouter = require('express').Router();
var jsonParser = require('body-parser').json();

postrouter.get('/demo', jsonParser, function(req, res) {
    res.send({
        test: 'success',
    })
});

module.exports = postrouter;