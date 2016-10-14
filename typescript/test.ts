var tempBoolen: boolean = true
var name: string = 'abc'
var age: number = 123
console.log(tempBoolen);

// 泛型
const tempList: number[] = [1, 2, 3]
const tempList2: Array<number> = [1, 2, 3, 4]

// 元组
let tempRow: [number, string, number] = [1, 'a', 1]

// 枚举
enum color { Red, Green, Blue }
var c: color = color.Red

// any,void
let tempAny: any = 1
tempAny = 'abc'
tempAny = false

const tempRowAny: any[] = [1, 'a', 2]