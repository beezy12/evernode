'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const logger = require('./lib/logger')
const note = require('./routes/note');
const category = require('./routes/category')

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
	extended:false
}));

// this is going to look for a query parameter in a post.
// method-override lets us do things that you normally can't do with an http method (?), like delete. so we can use method-override to turn things like method="POST" into a delete.
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	res.send('server running');
});

app.use(logger);

// this has to be below bodyParser, otherwise we would hit the route before the body gets parsed
app.use(note);
app.use(category);





// evernode will be the db name
mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
	if(err) throw err;
	app.listen(port, () => {
		console.log(`evernode server running on port: ${port}`);
	});
});






// 'use strict';

// const bodyParser = require('body-parser');
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = process.env.PORT || 3000;
// const Note = require('./models/note');



// app.set('view engine', 'jade');
// app.use(bodyParser.urlencoded({
// 	extended:false
// }));

// app.get('/', (req, res) => {
// 	res.send('server running');
// });

// // this route will just serve up the form
// app.get('/notes/new', (req, res) => {
// 	res.render('new-note');
// });

// /* IMPORTANT this has to be below notes/new because :id can be any word, if you go to the notes new, it assigns new to the :id part, so as the waterfall goes, it won't let you go to new if you had these in the wrong order */
// // this is where we get the note from the database and show it on the page
// app.get('/notes/:id', (req, res) => {
// 	Note.findById(req.params.id, (err, note) => {
// 		if(err) throw err;

// 		// we pass note as a second parameter here, which is a document in the db. by bringing it up when I render, I can now access it in my jade file.  h1= note.title   p= note.text
// 		// get note id from terminal and paste it in the url
// 		res.render('show-note', {note: note});

// 	});
// });

// // this is where we'll save to the database
// app.post('/notes', (req, res) => {
// 	// console.log(req.body);

// 	// this is where we save to the database mongoose schema. we assigned that schema to Note above
// 	// create auto saves
// 	Note.create(req.body, (err, note) => {
// 		if(err) throw err;
// 		console.log(note);
// 		// this will redirect to the show page for this note
// 		res.redirect(`/notes/${note._id}`);
// 	});

// });




// // evernode will be the db name
// mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
// 	if(err) throw err;
// 	app.listen(port, () => {
// 		console.log(`evernode server running on port: ${port}`);
// 	});
// });
