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
	Model.Post.findOne({where: {id: postid}, include: [Model.User, Model.Comment]}).then(function(posts) {
		var data = posts 
		console.log("get post on page of posts: " + data)
		Model.Comment.findAll({where: {postId: postid}}).then(function(comments){
			var userName = req.user.username
			var cdata = comments
			res.render('findpost',{posts: data, comments: cdata, username:userName, special: "yes"})
			console.log("hdfsjkfhdkjsah"+ userName)
		})
	})

})


router.get('/:userid/:postid/writecomment', function(req, res) {
	if (req.isAuthenticated())
		var postid = req.params.postid
	Model.Post.findOne({where: {id: postid}, include: [Model.User, Model.Comment]}).then(function(posts) {
		var data = posts
		Model.Comment.findAll({where: {postId: postid}}).then(function(comments){
			var cdata = comments
			res.render('comments', {posts: data, comments: cdata, username:req.user.username, special: "yes"})
			console.log("get write page: " + cdata)
		})
	})
})

router.post('/:userid/:postid/writecomment', function(req, res) {
	if (req.isAuthenticated())
		var userid = req.params.userid
		var useridd = req.session.passport.user
	var postid = req.params.postid
	var newComment = {comment: req.body.comment,
		username: req.user.username,
		userId: useridd,
		postId: postid}
		Model.Comment.create(newComment)
		
		res.redirect('/findpost/' + userid + '/' + postid)
	})





module.exports = router;