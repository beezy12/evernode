'use strict';

const Category = require('../models/category')

module.exports = {
	index (req, res) {
		Category.find({}, (err, cats) => {
			if(err) throw err;

			res.render('cat-index', {cats: cats})
		})
	},

	new (req, res) {
		res.render('cat-new')
	},

	create (req, res) {
		Category.create(req.body, (err) => {
			if(err) throw err;

			res.redirect('/categories')
		})
	},

	show (req, res) {
		res.render('cat-show', {category: req.category})
		console.log('just req.category', req.category)
		console.log('req.category.notes', req.category.notes)
	}
};


