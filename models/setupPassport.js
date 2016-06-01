// SET UP PASSPORT

var passport      = require('passport')
var LocalStrategy = require('passport-local').Strategy
var bcrypt        = require('bcrypt')
var Model         = require('./Models.js')
var session       = require('express-session');

module.exports = function(app) {

	app.use(passport.initialize())
	app.use(passport.session())

	passport.use(new LocalStrategy (
		function(username, password, done) {
			Model.User.findOne({
				where: {
					'username': username
				}	
			}).then(function(user) {
				if (user == null) {
					return done(null, false, {message: 'incorrect'})
				}

				var hashedPassword = bcrypt.hashSync(password, user.salt)

				if (user.password === hashedPassword ) {
					return done(null, user)
				}

				return done(null, false, {message: 'incorrect'})
			})
		}
		))

	passport.serializeUser(function(user, done) {
		done(null, user.id)
	})

	passport.deserializeUser(function(id, done) {
		Model.User.findOne({
			where: {
				'id': id
			}
		}).then(function (user) {
			if (user == null) {
				done(new Error('Wrong user id.'))
			}

			done(null, user)
		})
	})
}
