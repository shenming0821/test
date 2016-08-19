const React = require('react');
const Store = require('./store');
const Actions = require('./Actions');

const actions = new Actions();
const store = new Store();
// Top level component , container and controller-viewer
// angular controller



class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    add() {
        actions.add(this.refs.nameInput.value);

    }

    componentDidMount() {

        actions.getAll();

        store.on('change', list=> {
            this.setState({list});
        })
    }

    render() {
        return <ul>
            {this.state.list.map(item=><li>{item}</li>)}

            <li>
                <input ref="nameInput"/>
                <button onClick={this.add.bind(this)}> add</button>
            </li>
        </ul>
    }

}

module.exports = List;