var Model = require('./Models.js')

module.exports.SHOW = function(req,res) {
	
		
	res.render('index', {
		username: req.params.id
	})
	
}

module.exports.POST = function(req, res) {

	
	
}