// 定义变量的方式
let strt : string = "abc"

// 函数初始值
// 可选参数不传参就是undefined，有默认值的参数放在最后，可选参数也尽量往后排
function person(name: string, blnstudent?:boolean, age:number = 15) {
    console.log(name,age,blnstudent)
}

// 调用函数
person("lisz")