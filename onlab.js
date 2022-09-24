function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
console.log("1 + 2 =", add (1, 2));
console.log("1 - 2 =", sub (1, 2));
console.log("1 / 2 =", mul(1, 2));
console.log("1 / 2=", div(1, 2));

const currentYear = 2022;

function calcAge(year0fBirth) {
    return currentYear - year0fBirth;
}
console.log("Ba sinh năm 1992, hiện tại", calcAge(1992), "tuổi");
console.log("Tâm sinh năm 2004, hiện tại", calcAge(2004), "tuổi");
