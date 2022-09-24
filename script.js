alert("Hello Word");
console.log("Hiển thị gì đó ở màn hình console");
// chuỗi  - string
"Đây là một chuỗi";
'Đây cũng là một chuỗi';
//Số -  number 
1;
1.5;
-10;
Infinity;
-Infinity;
NaN; // Not a number
// logic - boolean (đúng hoặc sai)
true;
false;
// giá trị đặc biệt
null;
undefined;
// keywork name = value;
// Keywork: left, const, var
// Name: Chỉ bắt đầu bằng ký tự, không chứa kí tự đặc biệt
// value: string, number, boolean, null, undefined

let ten = "Ba Nguyễn";
let tuoi =  30;
let deptrai = true;

console.log(ten);
console.log(tuoi);
console.log(deptrai);

// Từ đầu tiên viết thường, các từ tiếp theo trong tên biến thì viết hoa chữ cái đầu tiên

// homNayLaNgayGiDo
// hằng số (giá trị mà mình có thể xac định từ đầu chương trình, và không bao giờ thay đổi) thì viết hoa nối các từ bằng dấu gạch dưới
const NGAY_SINH = "1992/05/24"

let x = 1;
let y = 2;
// Số học - Arithmetic
// So sánh - Comparison
// Gán - Assignment
// Logic

// Binary - bao gồm 2 toán hạng
// Unary - chỉ cần 1 toán hạng

let cong = x + y; //Phép cộng
let tru = x - y; //Phép trừ 
let nhan = x * y; //Phép nhân
let chia = x / y; //Phép chia

console.log (x < y);
console.log (x > y);

let z = 123;

-x;
+y;
typeof x;

"Ba" + "Nguyễn"; 
console.log(typeof x); //"number"
// function
// Các câu lệnh được bọc trong khối mã và gán trong 1 cái tên biến
// Cho phép tái sử dụng mã nhiều lần, nhiều nơi
// Cú pháp khai báo hàm 
// tham số - Parameters -()
function chao(ten) {
    console.log("Hello, " + ten + "rất vui được làm quen")
};               
// Đối số - arguments - các giá trị xác định cho tham số hàm
chao("Ba "); // ten = "Ba"
chao("Béo "); //ten = "Béo"

// biểu thức hàm (giống khai báo biến)
const tambiet = function () {
    console.log("Goodbye Ba, chim cút!!!")
};
tambiet();

// function cong(a, b) {
//     console.log(a + b);
//     // giá trị trả về
//     return a + b;
// }

console.log(cong(1, 2)); //3
console.log(cong(5, 10)); //15
console.log(cong(9, 3)); //12
1 + 2; //3
cong(1, 2); //tạo ra các giá trị

console.log(cong(1, 2)); //3
//1. chạy hàm cong
// 2. hàm cong trả lại giá trị 3
// console.log(cong(1, 2)) => console.log(3) => in 3 ra màn hình