//NODE MODULES
var express = require('express');
var router = express.Router();
var Model = require('../models/Models.js')
var passport = require('passport')

//MODULES

var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next()
	req.flash('error', 'You have to be logged in to access the page.')
	res.redirect('/unknown')
}
/* GET users listing. */
router.get('/:userid', function(req,res){
	if (req.isAuthenticated())
		var userid = req.params.userid
	Model.Post.findAll({where: {userId: userid}}).then(function(posts) {
		var data = posts.map(function(blogposts) { 
			return {
				title: blogposts.dataValues.title,
				content: blogposts.dataValues.content,
				id: blogposts.dataValues.id,
				userId: blogposts.dataValues.userId
			} 
		})

		res.render('findpost',{posts:data, 
			username: req.user.username})

	})
})

router.get('/:userid/:postid', function(req, res) {
	if (req.isAuthenticated())
		var postid = req.params.postid
	Model.Post.findOne({where: {id: postid}, include: [Model.User]}).then(function(posts) {
		var data = posts 
		res.render('findpost', {posts: data, username:req.user.username, special: "yes"})
	})

})





module.exports = router;