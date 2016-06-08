//NODE MODULES
var express = require('express');
var router = express.Router();
var Model = require('../models/Models.js')


//MODULES

var flash = require('connect-flash')



var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next()
	req.flash('error', 'You have to be logged in to access the page.')
	res.redirect('/unknown')
}


/* GET users listing. */
router.get('/', isAuthenticated, function(req,res) {

	Model.Post.findAll({include: [Model.User]}).then(function(posts) {
		console.log("komt ie " + posts)

		res.render('allposts',{posts:posts, 
			username: req.user.username})

		
	})
})








module.exports = router;
