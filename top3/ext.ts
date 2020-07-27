// 定义基础的接口
interface person2 {
    name: string,
    age?: number // 变量名和:之间写一个?就把这个变量变成了可选项了，不给运行的时候就是undefined，但是不能在这里给默认值
}

// 定义一个行为的接口
interface work {
    code: () => void
}

interface hero extends person2, work{
    feature: string
}

let h : hero = {
    name: "aaa",
    age: 18,
    feature: "勇气与责任",
    code: ()=>{
        console.log("writing code")
    }
}

console.log(h.name,h.age,h.feature,h.code())