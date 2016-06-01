// SET UP TABLE FOR POSTS

var Sequelize = require('sequelize')

var attributes = {

	postTitle: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	postCont: {
		type: Sequelize.STRING,
		allowNull: false,
	}
}


var options = {

	freezeTableName: true,
	timestamps: false,
}

module.exports.attributes = attributes
module.exports.options    = options
