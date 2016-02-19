'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Cats',
	mongoose.Schema({
		name: String,
		description: String
	})
);


// categories can have many notes.....thats why notes is an array here. and in the note model, category is not an array. a ONE TO MANY model
