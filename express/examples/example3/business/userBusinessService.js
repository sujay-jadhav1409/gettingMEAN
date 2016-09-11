var userModel = require('../model/userModel');

module.exports.getUserById = function (userId) {
	for(var i=0 ; i < userModel.users.length ; i++) {
		if(userModel.users[i].id == userId)
		{
			return userModel.users[i];	
		}
	}	
};

module.exports.findAll = function () {
	return 	userModel.users;
};

module.exports.save = function (user) {
	userModel.users.push(user);
	return user;
};
