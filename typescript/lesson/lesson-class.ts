class family {
  fatherName: string
  matherName: string
  constructor(faterName: string, matherName?: string) {
    this.fatherName = faterName
    this.matherName = matherName
  }
  sonCall(age: number) {
    console.log('我是' + this.fatherName + '的儿子,我今年' + age + '岁')
  }
}
class son extends family {
  age: number
  constructor(fatherName: string, age: number) {
    super(fatherName)
    this.age = age
  }
  hi(age = this.age){
    super.sonCall(age)
  }
}
let family1 = new son('hehe',18)
family1.hi()

// public
// private 只有自己可以调用
// protected 子类可调用
// static
// abstract