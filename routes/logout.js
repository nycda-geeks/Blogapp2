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

router.get('/',function(req,res){
	req.logout()
	res.redirect('/index')
})

module.exports = router;
