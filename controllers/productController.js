const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

exports.list = async (req, res) => {
	const { supplier, search } = req.query;
	let filter = {};
	if (supplier) filter.supplier = supplier;
	if (search) filter.name = { $regex: search, $options: 'i' };
	const products = await Product.find(filter).populate('supplier');
	const suppliers = await Supplier.find();
	res.render('products/index', { products, suppliers, selectedSupplier: supplier, search });
};

exports.createForm = async (req, res) => {
	const suppliers = await Supplier.find();
res.render('products/form', { product: null, suppliers });
};

exports.create = async (req, res) => {
	const { name, price, quantity, supplier } = req.body;
	try {
		await Product.create({ name, price, quantity, supplier });
		res.redirect('/products');
	} catch (err) {
		res.render('products/form', { error: 'Thêm sản phẩm thất bại!' });
	}
};

exports.editForm = async (req, res) => {
	const product = await Product.findById(req.params.id);
	const suppliers = await Supplier.find();
	res.render('products/form', { product, suppliers });
};

exports.update = async (req, res) => {
	const { name, price, quantity, supplier } = req.body;
	try {
		await Product.findByIdAndUpdate(req.params.id, { name, price, quantity, supplier });
		res.redirect('/products');
	} catch (err) {
		res.render('products/form', { error: 'Cập nhật sản phẩm thất bại!' });
	}
};

exports.delete = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.redirect('/products');
	} catch (err) {
		res.send('Xóa sản phẩm thất bại!');
	}
};
