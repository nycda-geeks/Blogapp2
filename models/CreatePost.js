var Model  = require('./Models.js')

module.exports.SHOW = function(req, res) {
  res.render('createpost', {title: 'Blogapp Create'})
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
  

  Model.connection.sync().then(function (){

    Model.Post.create(newPost).then(function() {
      res.redirect('/allposts')
    }).catch(function(error) {
      req.flash('error', "Post already exists")
      res.redirect('/createpost')
    })
  })
}