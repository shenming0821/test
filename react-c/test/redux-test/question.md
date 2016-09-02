```js
'use strict';
const Redux = require("redux");
const thunk = function (store) {
    console.log(store);
    return function (nextDispatch) {
        return function (action) {
            if (typeof action === "function") {
                action(nextDispatch);
            } else {
                nextDispatch(action);
            }
        }
    }
}
function thunkAction(name) {
    return dispatch => {
        dispatch({
            type: "chageName",
            name
        })
    }
}
const createStore = Redux.applyMiddleware(thunk)(Redux.createStore);

function reducer() {
    if (typeof state == 'undefined') return {};
    switch (action.type) {
        case "changeName":
            return { name: action.name };
        default:
            return state;
    }
}
const store = createStore(reducer, { name: "" });
```

为什么

> const store = createStore(reducer, { name: "" });

这行代码执行之后 控制台就会输出 第四行代码的log:


    { getState: [Function: getState],
    dispatch: [Function: dispatch] }


### 问题一：
我认为是执行store.dispatch()方法后才会发生调用reducer,
为什么在创建store时就已经开始调用了呢?这里该怎么理解。

-----------------------------------------------------------
在上述代码中加入
```js
store.subscribe(() => {
    console.log("result =>", store.getState());
});
store.dispatch(thunkAction("hehe"));
```
控制台log出:

{ getState: [Function: getState],

  dispatch: [Function: dispatch] }

result => {}

### 问题二： 
thunkAction("hehe")中传入了"hehe",
我认为打印的是 result=>{name:"hehe"},
但是打印的为什么是result => {} ?

--------------------------------------------------------------

### 问题三：
在下面thunk函数中
我看到const createStore = Redux.applyMiddleware(thunk)(Redux.createStore);
中给thunk方法传递了第一个参数（store）,应该是得到了一个function(nextDispatch){...}的函数，
此函数中的参数(nextDispatch)我想弄清楚在哪里什么,时候传进去的参数。因为我在上面console.log(store);
得到的是{ getState: [Function: getState],dispatch: [Function: dispatch] }，
一直搞不明白这里是如何进行参数传递的

### 问题四：
action(nextDispatch); 为什么这里是给action方法，传入(nextDispatch)参数,
此种情况下 action应该是一种什么样子的function呢?

```js
const thunk = function (store) {
    console.log(store);
    return function (nextDispatch) {
        return function (action) {
            if (typeof action === "function") {
                action(nextDispatch);
            } else {
                nextDispatch(action);
            }
        }
    }
}
```

老师：
    对redux中间件部分理解的不是很好，视频看过了很多遍，代码也敲了，思路还是不清晰，
    感觉是不明白其中的调用过程，请老师帮我解答以上问题，谢谢~~