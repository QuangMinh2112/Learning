// ------------------ var, let, const ------------------------------
// - scope, hoisting, re-assign
// var a = 3;
// function test() {
//   console.log(a);
// }
// test();
//-------- spread --------------
// var array1 = ["Javascript", "PHP", "Ruby"];
// var array2 = ["ReactJs", "Dart"];
// var result = [...array1, ...array2];
// console.log(result);

// --------------------- strict mode ------------------------------
// we got 3 way to use: khai báo ở trên cùng của file js, khai báo ở trên cùng của thẻ <script></script>, và khai báo bên trong 1 function

// ----------------- Các cách khai báo biến -----------------------
// var,let,const và function declaration

// ------------------------------- hoisting -------------------------------
// Lưu ý: Khai báo biến với "let" và "const" khi được hoisted không được tạo giá trị và được đưa vào "Temproal Dead Zone"

// ---------------------- Từ khóa "this" ------------------
// Trỏ đến đối tượng mà nó đang thuộc về

// ---------------------- Sự khác nhau giữa đuôi file sass và scss --------------
// Khi sử dụng scss thì sẽ có mở ngoặc nhọn, dấu chấm phẩy cuối và đóng ngoặc nhọn như css
// Khi sử dụng sass thì sẽ ko cần sử dụng và thay vào đó phải canh lề sao cho hợp lý (như python)

// Tránh tạo ra hàm mới 1 cách ko cần thiết

// --------------------- SASS ---------------------

// @mixin: giống như là 1 function, có viết viết các đoạn code CSS trong mixin và có thể sử dụng nhiều nơi, có thể sử dụng if else trong này
// cấu trúc rõ ràng
// variable:$primaryColor:"#ccc"
// viết code lồng nhau (nested code)
// thừa kế : %
// Đối với những file bắt đầu bằng "_" ví dụ: _variable thì sẽ ko được compile sang css
// Math, Maps, Loops,
