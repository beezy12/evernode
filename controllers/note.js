'use strict';

// controllers take data from the model, does the logic needed before it can be displayed to the screen

// note model
const Note = require('../models/note');

// category model
const Category = require('../models/category');


module.exports = {


	edit (req, res) {
		Category.find({}, (err, categories) => {
			if(err) throw err;

			res.render('new-note', {
				note: req.note,
				categories: categories
			});
		});
	},


	// all of these .update and whatever are methods on the mongoose object. It's basically
	// saying var note = new Note
	update (req, res) {
		req.note.update(req.body, (err) => {
			if(err) throw err;

			res.redirect(`/notes/${req.note._id}`);
		});
	},

	index (req, res) {
		Note.find({}, (err, notes) => {
			if(err) throw err;
			res.render('notes-index', {notes: notes});
		});
	},

	newNote (req, res) {
		Category.find({}, (err, categories) => {
			if(err) throw err;

			res.render('new-note', {
				categories: categories
			});
		})
	},

	show (req, res) {
		Note.findById(req.params.id, (err) => {
			if(err) throw err;

			// we pass note as a second parameter here, which is a document in the db. by bringing it up when I render, I can now access it in my jade file.  h1= note.title   p= note.text
			// get note id from terminal and paste it in the url
			res.render('show-note', {note: req.note});

		});
	},

	create (req, res) {
		//console.log('creating note', req.body);

		// this is where we save to the database mongoose schema. we assigned that schema to the variable Note above. create auto saves
		Note.create(req.body, (err, note) => {
			if(err) throw err;
			// console.log(note);
			// this will redirect to the show page for this note
			res.redirect(`/notes/${note._id}`);
		});
	},

	// again .remove here is a mongoose method that goes to the database and deletes
	destroy (req, res) {
		req.note.remove((err) => {
			if(err) throw err;

			res.redirect('/notes');
		});
	}

};







