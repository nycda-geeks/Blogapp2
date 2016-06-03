var Model = require('./Models.js')

module.exports.SHOW = function(req,res) {
	
	if (req.isAuthenticated())
		Model.User.findAll().then(function(users) {
			var data = users.map(function(userusers) { 
				return {
					username: userusers.dataValues.username,

				} 
			})
			console.log(data)
			res.render('users',{users:data, username:req.user.username})

		}) 

}

module.exports.POST = function(req, res) {
	if (req.isAuthenticated())
	var username = req.params.id

	Model.User.findOne({where: {username: username}}).then(function(user) {
		var userid = user.id
		Model.Post.findAll({where: {userId: userid}}).then(function(posts){
			res.render('allposts', {posts:posts, username:req.user.username})
		})
	})
}
