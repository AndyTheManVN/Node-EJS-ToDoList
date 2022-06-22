<h1>EJS : Embedded JavaScript<h1>

1. EJS:
  - Using EJS with Expres: https://github.com/mde/ejs/wiki/Using-EJS-with-Express
  - Cài đặt: npm i ejs
2. Views hoặc Template:
  - Tạo folder views (chữ v phải viết thường)
  - Tạo toàn bộ các file view trong folder này (tương tự template trong Django).
  - Render dữ liệu từ app.js ra view (ví dụ là view list - list.ejs)
    ```res.render("list", {day: day});``` 
3. Cú pháp của EJS trong html:
  - **<%** not html tag **%>**: thoát câu lệnh html
  - **<%=** variable **%>**: xuất giá trị biến ra html
4. Concept of scope:
  - Local and Global variable
5. Serve Static Files:
  - Tạo folder Public trong project
  - Tạo folder con CSS, images,... để serve static files
  - Khai báo public folder trong app.js: 
    ```app.use(express.static('public'));``` 
6. Template and Layout:
  - File extension: ejs
  - **<%- include("header"); -%>**
  - Tạo các file html riêng và include dùng chung giống Django
7. Export module:
  - Tạo các function riêng và export
  - Từ các .js muốn sử dụng functions thì call bằng cách khai báo require đến file js
    **const date = require(__dirname + "/date.js");**
