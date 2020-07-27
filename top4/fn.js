"use strict";
// 定义函数
function aa(name, age) {
    var arr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arr[_i - 2] = arguments[_i];
    }
    console.log(name, age, arr);
}
aa("lisz", 18, "abc", "123", ""); // 最后不是传数组
// 定义匿名的函数
var bb = function (code) {
    console.log(code);
};
bb("100110");
// 定义匿名的函数
(function (code2) {
    console.log(code2);
})("111000"); // 匿名函数转化为整体块，然后再加括号、加参数
