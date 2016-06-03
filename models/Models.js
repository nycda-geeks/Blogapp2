

var UserInfo = require('./DBSETUP/User.js')
var PostInfo = require('./DBSETUP/Posts.js')
var db = require('./DBSETUP/sequelize.js')



var User = db.define( 'user', UserInfo.attributes, UserInfo.options )
var Post = db.define( 'post', PostInfo.attributes, PostInfo.options )

User.hasMany(Post)
Post.belongsTo(User)


db.sync().then(function(){
	console.log("sync complete bitch")
})



module.exports.User = User
module.exports.Post = Post
module.exports.db = db