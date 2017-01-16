var orm = require('../config/orm.js');
var burger = {
	all: function (cb) {
		orm.selectAll('eatdaburgers', function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.insertOne('eatdaburgers', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.updateOne('eatdaburgers', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;