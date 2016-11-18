var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
=======
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
>>>>>>> 5d043101ba26b9b15c2d99b1018e48e12b212373

module.exports = router;
