
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

router.get('/', async (req, res) => {
	const suppliers = await Supplier.find();
	const { supplier, search } = req.query;
	let filter = {};
	if (supplier) filter.supplier = supplier;
	if (search) filter.name = { $regex: search, $options: 'i' };
	const products = await Product.find(filter).populate('supplier');
	res.render('index', { products, suppliers, selectedSupplier: supplier, search });
});

module.exports = router;

