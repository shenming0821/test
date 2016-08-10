// ReactDOM.render(
//     <div>
//         <button className="btn btn-default">Add</button>
//         <ul classNameName="list-group">
//             <li className="list-group-item">
//                 <a href="#" className="right glyphicon glyphicon-edit"></a>
//                 <a href="#" className="right glyphicon glyphicon-remove"></a>
//             </li>
//             <li className="list-group-item">Dapibus ac facilisis in</li>
//             <li className="list-group-item">Morbi leo risus</li>
//             <li className="list-group-item">Porta ac consectetur ac</li>
//             <li className="list-group-item">Vestibulum at eros</li>
//         </ul>
//     </div>,
//     document.getElementById('test')
// );

// Item
const Item = React.createClass({

    remove() {
        this.props.onRemove(this.props.id);
    },

    edit() {
        this.props.onEdit(this.props.id, this.props.value);
    },

    render() {
        return (
            <li className="list-group-item">
                {this.props.value}
                <a href="#" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
                <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>
        );
    }
});

// ItemEditor
const ItemEditor = React.createClass({

    getInitialState() {
        return {
            value: this.props.value
        }
    },

    changeHandle(event) {
        this.state.value = event.target.value;
        this.forceUpdate();

        // this.setState({
        //     value: event.target.value
        // });
    },

    remove() {
        // removeEditor(id)
        this.props.onRemove(this.props.id);
    },

    save() {
        this.props.onSave(this.props.id, this.state.value);
    },

    render() {
        return (
            <li className="list-group-item">
                {this.props.id}
                <input className="item-edit" onChange={this.changeHandle} value={this.state.value}/>
                <a href="#" className="glyphicon glyphicon-share" onClick={this.save}></a>
                <a href="#" className=" glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>
        );
    }
});

// List
const List = React.createClass({

    getInitialState() {
        return {
            key: 0,
            list: new Map(),
            editList: new Map()
        }
    },

    add() {
        const key = ++this.state.key;
        this.state.editList.set(key, ' ');
        this.forceUpdate();
    },

    removeItem(id) {
        this.state.list.delete(id);
        this.forceUpdate();
    },

    removeItemEditor(id) {
        this.state.editList.delete(id);
        this.forceUpdate();
    },

    save(id, value) {
        this.state.editList.delete(id);
        this.state.list.set(id, value);
        this.forceUpdate();
    },

    edit(id, value) {
        this.state.list.delete(id);
        this.state.editList.set(id, value);
        this.forceUpdate();
    },

    render() {

        const listDOM = [];
        const editListDOM = [];

        for (let entity of this.state.list) {
            listDOM.push(<Item id={entity[0]} key={entity[0]} onEdit={this.edit} onRemove={this.removeItem} value={entity[1]} />);
            // key自身提供的属性 用来准确定位元素
        }

        for (let entity of this.state.editList) {
            editListDOM.push(<ItemEditor key={entity[0]} onSave={this.save} onRemove={this.removeItemEditor} id={entity[0]} value={entity[1]}/>);
        }

        return (
            <div>
                <button className="btn btn-default" onClick={this.add}>Add</button>
                <ul classNameName="list-group">
                    {listDOM}
                    {editListDOM}
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <List />,
    document.getElementById('test')
)
