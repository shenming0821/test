/*function whatis<x>(chr: x): string {
  return chr + ' is' + typeof (chr)
}

whatis<string>('hello')*/

interface ss<t> {
  (arg: t): t
}

function whatis<t>(chr: t): t {
  return chr
}

let num: ss<number> = whatis
num(10)