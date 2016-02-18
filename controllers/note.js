'use strict';

// controllers take data from the model, does the logic needed before it can be displayed to the screen

const Note = require('../models/note');


module.exports = {
	edit (req, res) {
		Note.findById(req.params.id, (err, note) => {
			console.log('****', note)
			if(err) throw err;
			res.render('new-note', {note: note});
		})
	},

	update (req, res) {
		Note.findByIdAndUpdate(req.params.id, req.body, (err, note) => {
			if(err) throw err;

			res.redirect(`/notes/${note._id}`);
		});
	},

	index (req, res) {
		Note.find({}, (err, notes) => {
			if(err) throw err;
			res.render('notes-index', {notes: notes});
		});
	},



	newNote (req, res) {
		res.render('new-note');
	},

	show (req, res) {
		Note.findById(req.params.id, (err, note) => {
			if(err) throw err;

			// we pass note as a second parameter here, which is a document in the db. by bringing it up when I render, I can now access it in my jade file.  h1= note.title   p= note.text
			// get note id from terminal and paste it in the url
			res.render('show-note', {note: note});

		});
	},

	create (req, res) {
		console.log('creating note', req.body);

		// this is where we save to the database mongoose schema. we assigned that schema to Note above
		// create auto saves
		Note.create(req.body, (err, note) => {
			if(err) throw err;
			console.log(note);
			// this will redirect to the show page for this note
			res.redirect(`/notes/${note._id}`);
		});
	},


	destroy (req, res) {
		Note.findByIdAndRemove(req.params.id, (err) => {
			if(err) throw err;

			res.redirect('/notes');
		});
	}

}





