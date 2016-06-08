var express = require('express');
var router = express.Router();
var passport = require('passport')
var Model = require('../models/Models.js')
var flash = require('connect-flash')



var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/unknown')
  }



/* GET profile*/
router.get('/', isAuthenticated, function(req, res) {
  if (req.isAuthenticated())
  res.render('createpost', {title: 'Blogapp Create',
  username: req.user.username})
})

router.post('/', isAuthenticated, function(req, res) {
	if (req.isAuthenticated())
  var title = req.body.title
  var content = req.body.content
  
  
  if (!title || !content) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('createpost')
  }
  
  
  
  
  var newPost = {
    title: title,
    content: content
  }
  

  // theuser.createPost()
  
  Model.User.findOne({where: {id:req.session.passport.user}}).then(function(user) {
   user.createPost(newPost).then(function() {
    res.redirect('/allposts')
  }).catch(function(error) {
  	console.log("komt ie " + error)
    req.flash('error', "Post already exists")
    res.redirect('/createpost')
  })
})


  
})

module.exports = router;