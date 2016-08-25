const Reflux = require('reflux');

const action = Reflux.createAction({
    click() {
        this.triggerAsync('testname');
    }
})

action.listen(data => console.log('listen 1', data));
action.listen(data => console.log('listen 2', data));

// action.trigger('testname');
// setTimeout(() => {
//     action.trigger('testname');
// }, 400);
// action.triggerAsync('testname');

action.click();

console.log('------end---------');