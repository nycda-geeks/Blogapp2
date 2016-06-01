//NODE MODULES
var express = require('express');
var router = express.Router();
var passport = require('passport')
var SignUp = require('../models/SignUp.js')


//MODULES


/* GET users listing. */

 router.get('/', SignUp.SHOW)
 router.post('/', SignUp.POST)



  
  
 


  


module.exports = router;