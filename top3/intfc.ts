// 定义一个属性接口
interface person {
    name: string,
    age : number,
    say: ()=>string // 接口方法定义：()表示没有参数=>string表示返回值是一个string
    demo: string | string[] | (()=>string)    // 联合类型：有可能是string、string数组或者函数, 函数用()包裹，成为一个整体块
}

function showPerson(p : person) { // person 类型的参数
    console.log(p)
    console.log("姓名：" + p.name + " 年龄：" + p.age)
    console.log(p.say())
    console.log(p.demo)
}

//调用函数
showPerson({
    name: "lisz",
    age: 16,
    say: ()=>{ // 这里不是接口中的函数定义就不写=>后的返回值了
        return "OK"
    },
    demo: ["abc", "aaa"] // "lisz" 但是 12 不可以
})