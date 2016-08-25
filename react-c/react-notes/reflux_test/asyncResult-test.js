

const Reflux = require('reflux');

const action = Reflux.createAction({asyncResult: true, children: ['clickme']});

action.completed.listen(function () {
    console.log('complted');
    setTimeout(()=> {
        action.failed();
    })
});

action.failed.listen(function () {
    console.log('failed');
});

action.clickme.listen(function () {
    console.log('clickme');

    setTimeout(() => {
        action.completed();
    });
});

action.listen(function (data) {
    console.log('listen');
    setTimeout(function () {
        this.clickme();
    }.bind(this));
});

action.trigger();
