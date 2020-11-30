//纯函数概念：相同的输入永远会得到相同的输出，而且没有任何可观察的副作用。
//函数式编程不会保留中间的结果，所以变量是不可变的（无状态的）
//纯函数/不纯的函数 slice/splice
let array = [1,2,3,4,5];
//纯函数
console.log('slice：',array.slice(0,3))
console.log('slice：',array.slice(0,3))
console.log('slice：',array.slice(0,3))
//不纯函数
console.log('splice：',array.splice(0,3))
console.log('splice：',array.splice(0,3))
console.log('splice：',array.splice(0,3))

//Lodash