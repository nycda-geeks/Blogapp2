//CONNECT TO DATABASE
var express = require('express')
var path = require('path')
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://maartje:hartje123@192.168.99.100:32771/blogapp2')

module.exports = sequelize