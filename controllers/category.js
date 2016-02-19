'use strict';

const Category = require('../models/category')

module.exports = {
	index (req, res) {
		Category.find({}, (err, cats) => {
			if(err) throw err;

			res.render('cat-index', {cats: cats})
		})
	},
	// show (req, res) {
	// 	Category.findById(req.params.id, (err) => {
	// 		if(err) throw err;

	// 		res.render('cat-show', {cats: cats})
	// 	})
	// },
	new (req, res) {
		res.render('cat-new')
	},
	create (req, res) {
		Category.create(req.body, (err) => {
			if(err) throw err;

			res.redirect('/categori')
		})
	}
};


