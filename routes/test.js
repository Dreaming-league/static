var express = require('express');
var router = express.Router();

var quotes = [
    { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
    { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
    { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

/* GET json data. */
router.get('/', function(req, res, next) {
    res.json(quotes);
});

/* GET random json data. */
router.get('/quote/random', function(req, res) {
    var id = Math.floor(Math.random() * quotes.length);
    var q = quotes[id];
    res.json(q);
});

/* GET json data by id. */
router.get('/quote/:id', function(req, res) {
    if(quotes.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
    var q = quotes[req.params.id];
    res.json(q);
});

/* post */
router.post('/quote', function(req, res) {
    if(!req.body.hasOwnProperty('author') ||
        !req.body.hasOwnProperty('text')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    var newQuote = {
        author : req.body.author,
        text : req.body.text
    };

    quotes.push(newQuote);
    res.json(true);
});

/* post */
router.delete('/quote/:id', function(req, res) {
    if(quotes.length <= req.params.id) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    quotes.splice(req.params.id, 1);
    res.json(true);
});

module.exports = router;
