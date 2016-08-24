const React = require('react');
const Store = require('./store');
const Actions = require('./Actions');

const actions = new Actions(store);
const store = new Store();

// top level component . container and controll-view
class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    
    add(){
        //store._add(this.refs.nameInput.value);// 外部应该不能调用store
        // 应该是Actions.add(this.refs.nameInput.value);
        // ->dispacther ->stores
        actions.add(this.refs.nameInput.value);
    }

    componentDidMount() {

        actions.getAll();

        store.on('change',list=>{
            this.setState({list});
        })
    }
    

    render() {
        return (
            <ul>
                {this.state.list.map(item=><li>{item}</li>)}
                <li>
                    <input ref="nameInput"/>
                    <button onClick={this.add.bind(this)}>add</button>
                </li>
            </ul>
        );
    }
}

module.exports = List;