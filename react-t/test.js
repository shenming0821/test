/// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="../typings/globals/react/index.d.ts" />

/*var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o2);  // { a: 1, b: 2, c: 3 }*/


var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
    bar: {
        value: 2,  // bar is a non-enumerable property.
    },
    baz: {
        value: 3,
        enumerable: true  // baz is an own enumerable property.
    }
});

console.log('obj:' + obj);
var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }