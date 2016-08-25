import {default as Reflux, createAction, createStore} from 'reflux';

import React from 'react';

import ReactDOM from 'react-dom';

const action = createAction();
const store = createStore({
    init() {
        this.num = 0;
        this.listenTo(action, this.onClick);
    },
    onClick() {
        this.trigger(++this.num);
    }
});

var UI = React.createClass({
    // mixins: [Reflux.listenTo(store,"update")],
    // mixins:[Reflux.connect(store,'num')],
    mixins: [Reflux.connectFilter(store, 'num', function filter(num) {
        return 'number is ' + num;
    })],
    getInitialState: function () {
        return { num: 0 }
    },
    // update(num){
    //     this.setState({num});
    // },
    // componentDidMount: function () {
    //     this.unsubscribe = store.listen(num => this.setState({num}));
    // },
    // componentWillUnmount: function () {
    //     this.unsubscribe();
    // },
    render: function () {
        return <div>
            {this.state.num}
            <button onClick={action}> +</button>
        </div>
    }
});

ReactDOM.render(<UI/>, document.body);
