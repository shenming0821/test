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

function outputText(): void {
  // 无返回值
  // 不能写return
}

const tempRowAny: any[] = [1, 'a', 2]

var someVale: any = '123456'
// 转成string类型
let strLength: number = (<string>someVale).length
let strLength2: number = (someVale as string).length