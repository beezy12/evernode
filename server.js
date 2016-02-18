'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const Note = mongoose.model('Notes', mongoose.Schema({
	title: String,
	text: String
}));


app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
	extended:false
}));

app.get('/', (req, res) => {
	res.send('server running');
});

// this route will just serve up the form
app.get('/notes/new', (req, res) => {
	res.render('new-note');
});

// this is where we'll save to the database
app.post('/notes', (req, res) => {
	// console.log(req.body);
	// create auto saves
	Note.create(req.body, (err, note) => {
		if(err) throw err;
		console.log(note);
	})
	res.redirect('/');
});


// evernode will be the db name
mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
	if(err) throw err;
	app.listen(port, () => {
		console.log(`evernode server running on port: ${port}`);
	});
});
