var bcrypt = require('bcrypt')
var Model  = require('./Models.js')


module.exports.SHOW = function(req, res) {
  res.render('signup', {title: 'Blogapp Signup'})
}

module.exports.POST = function(req, res) {
  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }
  
  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  
  var newUser = {
    username: username,
    salt: salt,
    password: hashedPassword
  }
  

  

  Model.User.create(newUser).then(function() {
    res.redirect('/login')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
  
}