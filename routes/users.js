//NODE MODULES
var express = require('express');
var router = express.Router();
var AllUsers = require('../models/Users.js')


//MODULES
var flash = require('connect-flash')


//Check if user is logged in
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/unknown')
  }



/* GET users listing. */
router.get('/', isAuthenticated, AllUsers.SHOW )




module.exports = router;

