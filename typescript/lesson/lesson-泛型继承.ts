interface jicheng {
  length: number
}
function testFun<t extends jicheng>(chr: t): t {
  console.log(chr.length)
  return chr
}
testFun('hello')