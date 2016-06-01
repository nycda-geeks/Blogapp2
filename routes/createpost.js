var express = require('express');
var router = express.Router();
var passport = require('passport')
var SignUp = require('../models/SignUp.js')
var flash = require('connect-flash')



var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/unknown')
  }



/* GET profile*/
router.get('/', isAuthenticated, function(req, res) {
    res.render('creatpost')
  })

module.exports = router;