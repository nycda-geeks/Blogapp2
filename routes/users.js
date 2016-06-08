//NODE MODULES
var express = require('express');
var router = express.Router();
var Model = require('../models/Models.js')



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
router.get('/', function(req,res){
	if (req.isAuthenticated())
	Model.User.findAll().then(function(users) {
			var data = users.map(function(userusers) { 
				return {
					username: userusers.dataValues.username,
					id: userusers.dataValues.id,

				} 
			})

			res.render('users', {users: data, username:req.user.username})
			
			
				

	
	})

})





module.exports = router;

