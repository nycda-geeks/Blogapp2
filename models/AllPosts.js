var Model = require('./Models.js')

module.exports.SHOW = function(req,res) {
	
	Model.Post.findAll().then(function(posts) {
		var data = posts.map(function(blogposts) { 
			return {
				title: blogposts.dataValues.title,
				content: blogposts.dataValues.content,
			} 
		})
		console.log(data)
		res.render('allposts',{posts:data})

	}) 

}


