//NODE MODULES
var express = require('express');
var router = express.Router();
var passport = require('passport')

//MODULES


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login', {title: 'Blogapp Login'});
});


router.post('/', //function(req,res) {


	// console.log("username: " + req.body.username)

	// var redirect = '/index/' + req.body.username;
	passport.authenticate('local'), function (req,res) { 
		res.redirect('/index/' +req.user.username)
	})


module.exports = router;
