'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Cats',
	mongoose.Schema({
		name: String,
		description: String
	})
);

// we took out the notes array here that was below description. it looked like the one in the note model, but had an array instead of just an object

// categories can have many notes.....thats why notes is an array here. and in the note model, category is not an array. a ONE TO MANY model
