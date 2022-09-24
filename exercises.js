/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
 function findPerimeterOfRectangle(length, breadth) {
    return (length + breadth) *2;
 }
 console.log(
    "Hình chữ nhật có chiều dài 2 chiều rộng là 3 thì có chu vi là:",
    findPerimeterOfRectangle(2, 3)
 );

 /**
  * Tính diện tích hình chữ nhật
  *
  * @param {number} length Chiều dài hình chữ nhật
  * @param {number} breadth Chiều rộng hình chữ nhật
  *
  * @return {number} Diện tích hình chữ nhật
  */
 function findAreaOfRectangle(length, breadth) {
    return length * breadth;
 }
 console.log(
    "Hình chữ nhật có chiều dài là 15, chiều rộng là 20 có diện tích là:",
    findPerimeterOfRectangle(15, 20)
 )
 /**
  * Tìm đường kính hình tròn
  *
  * @param {number} r Bán hình hình tròn
  *
  * @return {number} Đường kính hình tròn
  */
 function findDiameterOfCircle(r) {}
 
 /**
  * Tìm chu vi hình tròn
  *
  * Quy ước PI = 3.14
  *
  * @param {number} r Bán hình hình tròn
  *
  * @return {number} Chu vi hình tròn
  */
 function findCircumferenceOfCircle(r) {
    return r * 2 * Math.PI
 }
 console.log(
    
    findPerimeterOfRectangle(45)
 );
 
 /**
  * Tìm diện tích hình tròn
  *
  * Quy ước PI = 3.14
  *
  * Bình phương sử dụng toán tử ** hoặc Math.pow()
  *
  * @param {number} r Bán kính hình tròn
  *
  * @return {number} Diện tích hình tròn
  */
 function findAreaOfCircle(r) {
    return r **2 * Math.PI
 }
 console.log(
    
 )
 
 /**
  * Tính diện tích hình tam giác theo công thức Heron
  *
  * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
  *
  * @param {number} a Chiều dài cạnh a
  * @param {number} b Chiều dài cạnh b
  * @param {number} c Chiều dài cạnh c
  *
  * @return {number} Diện tích hình tam giác
  */
 function findAreaOfTriangle(a, b, c) {
   return Math.sqrt(((a + b + c) / 2) * (((a + b + c) / 2) - a) * (((a + b + c) / 2) - b) * (((a + b + c) / 2) - c));
 }
 console.log("Diện tích tam giác có 3 cạnh lần lượt 10, 17, 21 là:", 
 findAreaOfTriangle(10, 17, 21))
 
 /**
  * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
  *
  * Tham khảo công thức chuyển đổi trên google
  *
  * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
  * 
  * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
  */
 function celsiusToFahrenheit(temp) {
   return (temp * 1.8 + 32).toFixed(1);
}

console.log(
   "NHiệt độ ở thang nhiệt Fahrenheit là:",
   celsiusToFahrenheit(37))
 