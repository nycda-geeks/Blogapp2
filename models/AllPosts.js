var Model = require('./Models.js')

module.exports.SHOW = function(req,res) {
	if (req.isAuthenticated())
		Model.Post.findAll().then(function(posts) {
			var data = posts.map(function(blogposts) { 
				return {
					title: blogposts.dataValues.title,
					content: blogposts.dataValues.content,
				} 
			})

			res.render('allposts',{posts:data, 
				username: req.user.username})

		})
}



module.exports.POST = function(req, res) {



}


