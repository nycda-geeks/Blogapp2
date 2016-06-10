//CONNECT TO DATABASE
var express = require('express')
var path = require('path')
var Sequelize = require('sequelize')
// var sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + ':hartje123@192.168.99.100:32768/blogapp2')
var sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/blogapp2')
module.exports = sequelize