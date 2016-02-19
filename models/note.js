'use strict';

// needed mongoose both in here and in server.js
const mongoose = require('mongoose');

// Notes here will get pluralized and uppercased no matter what you do
// also, when we moved this into here, we took off the const Note and added module.exports
// required Note in server.js to use this there though
module.exports = mongoose.model('Notes',
	mongoose.Schema({
		title: String,
		text: String,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Cats'
		}
	})
);



// we only had to have one match up here using category to match to the category model
