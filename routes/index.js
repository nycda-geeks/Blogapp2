//NODE MODULES
var express = require('express');
var router = express.Router();
var oneUser = require('../models/Index.js')

//MODULES

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/unknown')
  }

/* GET home page. */

router.get('/:id', isAuthenticated, oneUser.SHOW)

router.get('/', function(req,res){
	if (req.isAuthenticated())
	res.redirect('/index/' + req.user.username)
	else
	res.render('index')
})


module.exports = router;
