const express = require('express'),
    dbURI = 'mongodb://localhost/cwbforum',
    mongoose = require('mongoose');

// call express to create app
// and obtain APIs
const app = express();

// connect to database with Mongoose
mongoose.connect(dbURI, err => {
    if (err) throw err;
    console.log('Connected to database.');
})

var router = require('./api/posts.js');
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('homepage');
});

app.get('*', (req, res) => {
    res.send('Fallback');
});

app.listen(8080, () => {
    console.log('Server running on port 8080.');
});