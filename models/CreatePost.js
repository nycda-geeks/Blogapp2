var Model  = require('./Models.js')

module.exports.SHOW = function(req, res) {
  if (req.isAuthenticated())
  res.render('createpost', {title: 'Blogapp Create',
  username: req.user.username})
}

module.exports.POST = function(req, res) {
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
    req.flash('error', "Post already exists")
    res.redirect('/createpost')
  })
})


  
}