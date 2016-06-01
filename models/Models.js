// DECLARE ANY RELATIONS

var UserInfo = require('./User.js')
var PostInfo = require('./Posts.js')
var connection = require('./sequelize.js')

var User = connection.define( 'users', UserInfo.attributes, UserInfo.options )
var Post = connection.define( 'posts', PostInfo.attributes, PostInfo.options )

// DECLARE RELATIONS BELOW




module.exports.User = User
module.exports.Post = Post
module.exports.connection = connection