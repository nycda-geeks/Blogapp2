//NODE MODULES
var express = require('express');
var router = express.Router();
var passport = require('passport')

//MODULES


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login', {title: 'Blogapp Login'});
});


router.post('/', passport.authenticate('local', {
	successRedirect: '/profile',
	failureRedirect: '/index',
	failureFlash: true 
}))

module.exports = router;