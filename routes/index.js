//NODE MODULES
var express = require('express');
var router = express.Router();

//MODULES


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'BlogApp' });
});

module.exports = router;
