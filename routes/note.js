'use strict';
// router connects the logic to the request

const express = require('express');
const router = express.Router();

// const Note = require('../models/note');
const note = require('../controllers/note');

// this route will just serve up the form
router.get('/notes/new', note.newNote);

/* IMPORTANT this has to be below notes/new because :id can be any word, if you go to the notes new, it assigns new to the :id part, so as the waterfall goes, it won't let you go to new if you had these in the wrong order */
// this is where we get the note from the database and show it on the page
router.get('/notes/:id', note.show);

// listening for a delete request on the notes/:id route, and when it does fire the note.destroy
// methods here have to be lowercase, but in HTML, HTTP verbs tend to be all caps.
router.delete('/notes/:id', note.destroy);

// this is where we'll create a new note and save to the database
router.post('/notes', note.create);

router.get('/notes', note.index);


module.exports = router;


