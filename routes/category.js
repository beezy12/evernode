'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/category')


// using chaining to set up the routes
router
	.get('/categories', ctrl.index)
	.get('/categories/new', ctrl.new)
	.post('/categories', ctrl.create)




// router.get('/categories', ctrl.index)

// router.post('/categories', ctrl.create)

// router.get('/categories/new', ctrl.new)




module.exports = router;
