'use strict'

var db = require('./userDataModule.server.model');

exports.getUser = function(req, res) {

	let username = req.body.user;
	
	if (username === null) {
		db.userModel.find((err, data) => {
			if (err) {
				return res.status(400).json({error: err}).end();
			}
			
			return res.status(200).json({users : data}).end();
		});
	}
	else {
		db.userModel.findOne({ username: username }, (err, data) => {
			if (err) {
				return res.status(400).json({error: err}).end();
			}
			
			// TODO: Have a separate error status for a user not existing in the database 
			if (data === null) {
				return res.status(401).json({error: "Error: username / password is incorrect"});
			}
			
			return res.status(200).json({user: user}).end();
	}
}

exports.addUser = function(req, res) {

	let username = req.body.username;
	let password = req.body.password;
	
	if (username === null || password === null) {
		return res.status(401).json({error: "Error: username or password not provided"});
	}
	
	let userModel = new db.UserModel();
	
	userModel.username = username;
	userModel.password = password;
	
	userModel.save((err, data) => {
	
		if (err) {
			return res.status(400).json({error : err}).end();
		}
		
		return res.status(200).end();
	});
