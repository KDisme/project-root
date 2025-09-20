const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/qlsanpham', { useNewUrlParser: true, useUnifiedTopology: true });

async function seed() {
  await Supplier.deleteMany({});
  await Product.deleteMany({});

  const suppliers = await Supplier.insertMany([
    { name: 'Công ty ABC', address: '123 Đường A, Quận 1', phone: '0901234567' },
    { name: 'Công ty XYZ', address: '456 Đường B, Quận 2', phone: '0912345678' },
    { name: 'Công ty DEF', address: '789 Đường C, Quận 3', phone: '0923456789' }
  ]);

  await Product.insertMany([
    { name: 'Sản phẩm 1', price: 100000, quantity: 50, supplier: suppliers[0]._id },
    { name: 'Sản phẩm 2', price: 200000, quantity: 30, supplier: suppliers[1]._id },
    { name: 'Sản phẩm 3', price: 150000, quantity: 20, supplier: suppliers[2]._id },
    { name: 'Sản phẩm 4', price: 120000, quantity: 40, supplier: suppliers[0]._id },
    { name: 'Sản phẩm 5', price: 250000, quantity: 10, supplier: suppliers[1]._id }
  ]);

  console.log('Đã thêm dữ liệu mẫu!');
  mongoose.connection.close();
}

seed();
