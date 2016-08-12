const eventbus = new eventemitter.EventEmitter();

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
        // 给组件装载监听test event事件
        this.props.bus.on('test event',() => {
            console.log('handle is' + this.props.name);
        })

        this.state.list = this.props.data.map(item => { return { name: item, active: false } })
    },
    componentDidMount() {
        setTimeout(() => {
            this.state.list[1].active = true;
            this.forceUpdate();
        }, 1000);
    },
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

ReactDOM.render(
    <div>
        <Comp bus={eventbus} name='comp1' data={list}/>
        <Comp bus={eventbus} name='comp2' data={list}/>
    </div>
    , document.body);


setTimeout(() => {
    // 触发事件
    eventbus.emit('test event')
}, 5000);