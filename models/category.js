'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Cats',
	mongoose.Schema({
		name: String,
		description: String
	})
);
