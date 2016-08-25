// Item
const Item = React.createClass({

    getInitialState(){
        return {
            isEdit:true
        }
    },

    edit(){
        this.setState({isEdit:true});
    },

    remove(){
        this.props.onRemove(this.props.id);
    },

    save(){
        this.props.onSave(this.props.id, this.refs.inputText.value);
        this.setState({isEdit:false});
    },

    render(){

        return this.state.isEdit ? <li className="list-group-item">
            {this.props.id}
            <input className="item-edit" ref="inputText" defaultValue={this.props.value}/> <a href="#"
                                                                                                    className="glyphicon glyphicon-share" onClick={this.save}> </a>
            <a href="#" className=" glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li> :

            <li className="list-group-item"> {this.props.value} <a href="#"
                                                                   className="right glyphicon glyphicon-edit"
                                                                   onClick={this.edit}></a>
                <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>


    }
});

// List
const List = React.createClass({

    getInitialState(){
        return {
            key: 0,
            list: new Map()
        }
    },

    add(){
        const key = ++this.state.key;
        this.state.list.set(key, '');
        this.forceUpdate();
    },

    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },

    save(id, value){
        this.state.list.set(id, value);
        this.forceUpdate();
    },

    render(){

        const listDOM = [];

        for (let entity of this.state.list) {
            listDOM.push(<Item id={entity[0]} key={entity[0]} onRemove={this.removeItem} onSave={this.save}
                               value={entity[1]}/>);
            //listDOM.push(React.createElement(Item,{id,key}));
        }


        return <div>
            <button onClick={this.add} className="btn btn-default">Add</button>
            <ul className="list-group">
                {listDOM}
            </ul>
        </div>
    }
});

// web components

ReactDOM.render(
    <List />,
    document.getElementById('test')
);
