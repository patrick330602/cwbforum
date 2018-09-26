var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var router = express.Router();

module.exports = router;

router.get('/posts/demo', jsonParser, function(req, res) {
    res.send({
        test: 'success',
    })
});