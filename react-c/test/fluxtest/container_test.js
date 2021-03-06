const React = require('react');
const Dispatcher = require('flux').Dispatcher;
const dispatcher = new Dispatcher;
const Store = require('flux/utils').Store;
const ReactDOM = require('react-dom');
const Container = require('flux/utils').Container;

class ListStore extends Store {

    constructor(dispatcher) {
        super(dispatcher);
        this.state = [];
    }

    __onDispatch(action) {
        switch (action.type) {
            case 'add':
                this.__changed = true;
                this.state.push(action.item);
                break;
        }
    }
}

let store = new ListStore(dispatcher);

class UI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    static getStores() {
        return [store];
    }

    static calculateState(prevState) {
        console.log(store.state);
        return {
            list:store.state
        };
    }

    click() {
        let value = this.refs.input.value;
        let addAction = {
            type: 'add',
            item: value
        };
        dispatcher.dispatch(addAction);
    }

    render() {
        let list = this.state.list.map(item=><li>{item}</li>);

        return <ul>
            <li>
                <input type='text' ref='input'/>
                <button onClick={this.click.bind(this)}> add</button>
            </li>
            {list}

        </ul>
    }
}


const ContainerUI = Container.create(UI,{pure:false});

ReactDOM.render(<ContainerUI/>,document.body);