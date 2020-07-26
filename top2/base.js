"use strict";
// 定义一个字符型的变量
var str = "张三"; //没有指定类型
var str2;
str2 = str + (", \u4F60\u597D\uFF0C" + str);
// 数组定义
var arr = [2, 1, 3.14];
var arr2 = ["a", "asd", "aaa"];
// 元组定义 元组：既知道数量又知道类型数组 []里面要有类型
var arr3 = ["aaa", 12];
// 任意类型值
var arr4 = ["abc", 123, 3.14];
var str3 = "asd"; // 运行的时候要去判断类型，速度慢。实在没法知道类型的情况下可以使用
// 空值类型 void
function consol() {
    console.log("OK");
}
