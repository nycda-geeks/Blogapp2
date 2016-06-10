

var UserInfo    = require('./DBSETUP/User.js')
var PostInfo    = require('./DBSETUP/Posts.js')
var db          = require('./DBSETUP/sequelize.js')
var CommentInfo = require('./DBSETUP/Comments.js')



var User = db.define( 'user', UserInfo.attributes, UserInfo.options )
var Post = db.define( 'post', PostInfo.attributes, PostInfo.options )
var Comment = db.define( 'comment', CommentInfo.attributes, CommentInfo.options)

User.hasMany(Post)
Post.belongsTo(User)
Post.hasMany(Comment)
Comment.belongsTo(Post)
Comment.belongsTo(User)
User.hasMany(Comment)


db.sync().then(function(){
	console.log("sync complete bitch")
})



module.exports.User = User
module.exports.Post = Post
module.exports.db = db
module.exports.Comment = Comment