// 定义函数
// 在ts中形参要声明类型"name" -> "name:string"，否则报错：Parameter 'name' implicitly has an 'any' type.
function tip(name:string) {
    return name + ", hello!"
}

// 调用函数
let _name = "小明"
// 将函数返回的内容作为页面显示的字符串. first.ts的引入script必须放在<body>里面才可以，否则body还没有解析到就执行会报错
document.body.innerText = tip(_name)