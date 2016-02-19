'use strict';

const Log = require('../models/logModel');

module.exports = (req, res, next) => {
	// console.log(req)
	// log req to db function
	Log.create({
		userAgent: req.headers['user-agent'],
		route: req.url,
		verb: req.method
	}, next);
}
