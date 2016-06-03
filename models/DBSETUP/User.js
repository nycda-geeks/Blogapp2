//SET UP USERSTABLE FOR LOGIN AND PROFILE

var Sequelize = require('sequelize');



var attributes = {
	

	username: {
		type: Sequelize.STRING,
		allowNul: false,
		unique: true,

	},

	password: {
		type: Sequelize.STRING,
	},

	salt: {
		type: Sequelize.STRING,
	}


}

var options = {

	freezeTableName: true,
	timestamps: false,
}

module.exports.attributes = attributes
module.exports.options    = options