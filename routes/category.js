'use strict';

const express = require('express');
const router = express.Router();

const Category = require('../models/category')
const Note = require('../models/note')
const ctrl = require('../controllers/category')

// didn't have to populate here because we are just getting the category ???
router.param('id', (req, res, next, id) => {
	Category.findById(id, (err, category) => {

			if(err) throw err;

			req.category = category;

			Note.find({category: id}, (err, notes) => {
				if (err) throw err;

				// throw all notes on category object
				req.category.notes = notes
				console.log('req.category.notes', req.category.notes)
				next();
			})
		});
});



// using chaining to set up the routes
router
	.get('/categories', ctrl.index)
	.get('/categories/new', ctrl.new)
	.post('/categories', ctrl.create)
	.get('/categories/:id', ctrl.show)




// router.get('/categories', ctrl.index)

// router.post('/categories', ctrl.create)

// router.get('/categories/new', ctrl.new)


module.exports = router;



