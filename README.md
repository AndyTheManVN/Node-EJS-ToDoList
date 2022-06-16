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

