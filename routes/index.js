//NODE MODULES
var express = require('express');
var router = express.Router();


//MODULES

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/unknown')
  }

/* GET home page. */

router.get('/:id', isAuthenticated, function(req,res) {
	
		
	res.render('index', {
		username: req.params.id
	})
	
})

router.get('/', function(req,res){
	if (req.isAuthenticated())
	res.redirect('/index/' + req.user.username)
	else
	res.render('index')
})


module.exports = router;
