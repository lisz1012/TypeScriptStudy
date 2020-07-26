// 定义一个字符型的变量
let str = "张三" //没有指定类型
let str2 : string

str2 = str + `, 你好，${ str }`

// 数组定义
let arr : number[] = [2, 1, 3.14]
let arr2 : string[] = ["a", "asd", "aaa"]

// 元组定义 元组：既知道数量又知道类型数组 []里面要有类型
let arr3:[string, number] = ["aaa", 12]

// 任意类型值
let arr4:any[] = ["abc", 123, 3.14]
let str3:any = "asd" // 运行的时候要去判断类型，速度慢。实在没法知道类型的情况下可以使用

// 空值类型 void
function consol():void{
    console.log("OK")
}