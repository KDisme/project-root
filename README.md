# Quản lý sản phẩm & nhà cung cấp

## Mô tả
Website quản lý sản phẩm và nhà cung cấp, hỗ trợ đăng ký, đăng nhập, quên mật khẩu, quản trị sản phẩm và nhà cung cấp (CRUD), lọc và tìm kiếm sản phẩm theo nhà cung cấp và tên sản phẩm. Giao diện sử dụng Bootstrap.

## Tính năng
- Quản lý nhà cung cấp: tên, địa chỉ, số điện thoại
- Quản lý sản phẩm: tên, giá, số lượng, nhà cung cấp
- Đăng ký, đăng nhập, quên mật khẩu, đăng xuất
- Quản trị sản phẩm và nhà cung cấp (CRUD, cần đăng nhập)
- Lọc sản phẩm theo nhà cung cấp, tìm kiếm sản phẩm theo tên
- Giao diện đẹp với Bootstrap

## Cài đặt
```bash
npm install
```
Cài đặt các package cần thiết:
```bash
npm install express ejs mongoose dotenv bcryptjs express-session connect-mongo cookie-parser connect-flash method-override express-validator nodemailer
npm install --save-dev nodemon
```

## Khởi tạo dữ liệu mẫu
```bash
node seed.js
```

## Chạy ứng dụng
```bash
node app.js
```
Hoặc dùng nodemon để tự động reload khi thay đổi:
```bash
npx nodemon app.js
```

Truy cập website tại: [http://localhost:3000](http://localhost:3000)

## Thư mục chính
- `models/` : Định nghĩa các schema cho User, Product, Supplier
- `controllers/` : Xử lý logic cho xác thực, sản phẩm, nhà cung cấp
- `routes/` : Định nghĩa các route cho xác thực, sản phẩm, nhà cung cấp
- `views/` : Giao diện các trang web (EJS + Bootstrap)
- `public/` : Tài nguyên tĩnh (CSS, JS)
- `seed.js` : Script thêm dữ liệu mẫu

## Liên hệ
Nếu có vấn đề hoặc cần hỗ trợ, vui lòng liên hệ qua email hoặc mở issue trên repository.
