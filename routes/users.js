//NODE MODULES
var express = require('express');
var router = express.Router();
var Model = require('../models/Models.js')


//MODULES


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a res')
});

module.exports = router;

