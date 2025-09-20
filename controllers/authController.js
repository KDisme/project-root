const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
	const { username, password, email, phone } = req.body;
	try {
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.render('register', { error: 'Username đã tồn tại!' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ username, password: hashedPassword, email, phone });
		await user.save();
		res.redirect('/login');
	} catch (err) {
		res.render('register', { error: 'Đăng ký thất bại!' });
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.render('login', { error: 'Sai username hoặc password!' });
		}
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.render('login', { error: 'Sai username hoặc password!' });
		}
		req.session.userId = user._id;
		res.redirect('/');
	} catch (err) {
		res.render('login', { error: 'Đăng nhập thất bại!' });
	}
};

exports.logout = (req, res) => {
	req.session.destroy(() => {
		res.clearCookie('connect.sid');
		res.redirect('/login');
	});
};

exports.forgot = async (req, res) => {
	const { email, phone } = req.body;
	try {
		const user = await User.findOne({ email, phone });
		if (!user) {
			return res.render('forgot', { error: 'Không tìm thấy người dùng!' });
		}
		// Đơn giản: hiển thị lại password (không nên dùng thực tế)
		res.render('forgot', { message: `Mật khẩu của bạn là: ${user.password}` });
	} catch (err) {
		res.render('forgot', { error: 'Lấy lại mật khẩu thất bại!' });
	}
};
