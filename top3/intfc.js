"use strict";
function showPerson(p) {
    console.log(p);
    console.log("姓名：" + p.name + " 年龄：" + p.age);
    console.log(p.say());
    console.log(p.demo);
}
//调用函数
showPerson({
    name: "lisz",
    age: 16,
    say: function () {
        return "OK";
    },
    demo: ["abc", "aaa"] // "lisz" 但是 12 不可以
});
