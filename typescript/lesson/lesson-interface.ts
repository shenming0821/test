interface searchRepeat {
  // 输入:输出
  (sourceTest: string, findText: string): boolean
}

var findFun: searchRepeat
findFun = function (sourceX: string, findX: string) {
  var result = sourceX.search(findX)
  if (result != -1) {
    return true
  } else {
    return false
  }
}

interface stringArray {
  [index: number]: string
}
let myArray: stringArray
myArray[111, 222]