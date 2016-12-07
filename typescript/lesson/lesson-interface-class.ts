interface ClockInterface {
  currenttime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currenttime: Date
  setTime(d: Date) {
    this.currenttime = d
  }
  constructor(h: number, m: number){}
}
var sss = new Clock(2015,2015)
console.log(sss.setTime)