// 定义函数
function aa(name:string,age?:number, ...arr:string[]):void{ //?是可选参数，不传就是undefined
    console.log(name,age,arr)
}

aa("lisz",18,"abc","123","") // 最后不是传数组

// 定义匿名的函数
let  bb = function(code:string) {
    console.log(code)
}

bb("100110");

// 定义匿名的函数
(function (code2:string) {
    console.log(code2)
})("111000") // 匿名函数转化为整体块，然后再加括号、加参数