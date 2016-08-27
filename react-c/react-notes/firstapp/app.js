
// Item
const Item = React.createClass({

    // this.props.onEdit -> function

    edit(){
        this.props.onEdit(this.props.id,this.props.value);
    },

    remove(){
        // removeItemEditor(id)
        this.props.onRemove(this.props.id);
    },

    render(){
        return <li className="list-group-item"> {this.props.value} <a href="#"
                                                                  className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
            <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li>
    }
});

// ItemEditor
const ItemEditor = React.createClass({

    getInitialState(){
        return {
            value:this.props.value
        }
    },

    changeHandle(event){
        this.state.value   =  event.target.value;
        this.forceUpdate();
        //this.setState({
        //    value:event.target.value
        //});

        // bootstrap jquery component
        // react-bootstrap component
    },

    remove(){
        // removeItemEditor(id)
        this.props.onRemove(this.props.id);
    },

    save(){
        this.props.onSave(this.props.id,this.state.value);
    },


    render(){


        return <li className="list-group-item">
            {this.props.id}
            <input className="item-edit" onChange={this.changeHandle} value={this.state.value}/> <a href="#" className="glyphicon glyphicon-share" onClick={this.save}> </a>
            <a href="#" className=" glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li>
    }
});

// List
const List = React.createClass({

    getInitialState(){
        return {
            key:0,
            list:new Map(),
            editList:new Map()
        }
    },

    add(){
        const key = ++this.state.key;
        this.state.editList.set(key,'');
        this.forceUpdate();
    },

    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },

    removeItemEditor(id){
        this.state.editList.delete(id);
        this.forceUpdate();
    },

    save(id,value){
        this.state.editList.delete(id);
        this.state.list.set(id,value);
        this.forceUpdate();
    },

    edit(id,value){
        this.state.list.delete(id);
        this.state.editList.set(id,value);
        this.forceUpdate();
    },

    render(){

        const listDOM = [];
        const editListDOM = [];

        // <javascript es6 实战>

        for(let entity of this.state.list){
            listDOM.push(<Item id={entity[0]} key={entity[0]} onEdit={this.edit} onRemove={this.removeItem} value={entity[1]} />);
            //listDOM.push(React.createElement(Item,{id,key}));
        }

        for(let entity of this.state.editList){
            editListDOM.push(<ItemEditor onSave={this.save} key={entity[0]}  onRemove={this.removeItemEditor} id={entity[0]} value={entity[1]}/>)
        }

        return <div>
            <button onClick={this.add} className="btn btn-default">Add</button>
            <ul className="list-group">
                {listDOM}
                {editListDOM}
            </ul>
        </div>
    }
});

// web components

ReactDOM.render(
    <List />,
    document.getElementById('test')
);
