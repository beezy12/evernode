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






