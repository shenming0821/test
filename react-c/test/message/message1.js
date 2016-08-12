// 子向父组件通信
const Item = React.createClass({
    render() {

        let style = this.props.actived ? { border: "1px solid #f66" } : {};

        return (
            <li onClick={ this.props.callback } style={style}>{this.props.name}</li>
        )
    }
});

const Comp = React.createClass({
    getInitialState() {
        return {
            list: []
        }
    },
    componentWillMount() {
        this.state.list = this.props.data.map(item => { return { name: item, active: false } })
    },

    componentDidMount() {
        setTimeout(() => {
            this.state.list[1].active = true;
            this.forceUpdate();
        }, 1000);
    },

    // 子向父组件通信
    callback(item){
        alert(item.name);
    },

    render() {
        return (
            <ul>
                {this.state.list.map(item => <Item callback={this.callback.bind(this,item)} actived={ item.active } name={ item.name }/>)}
            </ul>
        )
    }
});

const list = [
    "AAA",
    "BBB",
    "CCC",
    "DDD"
];

ReactDOM.render(<Comp data={list}/>, document.body);