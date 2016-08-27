/**
 * browserify babelify babel-preset-react babel-prest-es2015
 * react react-dom
 * redux - state
 */


function pureFunction(state){

    // ++state.num;
    // return state;

    let num = ++state.num;
    return {
        num
    }
    // return state;
}

const newState = pureFunction({num:2});

console.log(newState);
