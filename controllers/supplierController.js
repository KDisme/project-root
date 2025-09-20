exports.detail = async (req, res) => {
	const supplier = await Supplier.findById(req.params.id);
	if (!supplier) return res.status(404).send('Không tìm thấy nhà cung cấp');
	res.render('suppliers/detail', { supplier });
};
const Supplier = require('../models/Supplier');

exports.list = async (req, res) => {
	const suppliers = await Supplier.find();
	res.render('suppliers/index', { suppliers });
};

exports.createForm = (req, res) => {
	res.render('suppliers/form', { supplier: {} });
};

exports.create = async (req, res) => {
	const { name, address, phone } = req.body;
	try {
		await Supplier.create({ name, address, phone });
		res.redirect('/suppliers');
	} catch (err) {
		res.render('suppliers/form', { error: 'Thêm nhà cung cấp thất bại!', supplier: {} });
	}
};

exports.editForm = async (req, res) => {
	const supplier = await Supplier.findById(req.params.id);
	res.render('suppliers/form', { supplier });
};
exports.update = async (req, res) => {
	const { name, address, phone } = req.body;
	try {
		await Supplier.findByIdAndUpdate(req.params.id, { name, address, phone });
		res.redirect('/suppliers');
	} catch (err) {
		res.render('suppliers/form', { error: 'Cập nhật nhà cung cấp thất bại!', supplier: {} });
	}
};

exports.delete = async (req, res) => {
	try {
		await Supplier.findByIdAndDelete(req.params.id);
		res.redirect('/suppliers');
	} catch (err) {
		res.send('Xóa nhà cung cấp thất bại!');
	}
};
