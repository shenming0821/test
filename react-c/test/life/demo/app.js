const list = [];

const database = {

    add(article){
        list.push(article);
        return list.length - 1;
    },
    del(index){
        list[index] = null;
    },
    update(index, newArticle){
        list.splice(index, 1, newArticle);
    },
    get list() {
        return list;
    }

};

const Item = React.createClass({
    displayName: 'Item',

    getDefaultProps() {
        console.log('getDefaultProps');
        return {
            value: 'no value',
        }
    },

    getInitialState() {
        console.log('getInitialState');
        return {
            name: this.props.value,
            currentHistoryIndex: 0,
            history: [this.props.value]
        }
    },

    componentWillMount() {
        console.log('componentWillMount');
        this.state.dbkey = database.add({ value:this.state.value });
    },

    componentDidMount() {
        console.log('componentDidMount');

        const dom = ReactDOM.findDOMNode(this);

        let isYellow = false;

        this.state.timer = setInterval(function () {
            if (isYellow) {
                dom.style.backgroundColor = 'red';
                isYellow = false;
            } else {
                dom.style.backgroundColor = 'yellow';
                isYellow = true;
            }
        }, 1000);
    },

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.state.value = nextProps.value;
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        let dbkey = this.state.dbkey;
        database.update(dbkey,this.state.value);
    },

    // render()

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate');
        const dom = ReactDOM.findDOMNode(this);

        let oldStyle = dom.style.border;
        dom.style.border = '2px solid red';
        setTimeout(function () {
            dom.style.border = oldStyle;
        }, 2000);
    },

    changeValue(event) {
        this.setState({
            value: event.target.value
        })
    },

    save(){ //
        // this.state.history.push(this.state.value);
        // this.state.currentHistory = this.state.value;

        const value = this.state.value;
        const history = this.state.history;

        history.push(value);
        const currentHistoryIndex = history.length - 1;

        this.setState({
            history,currentHistoryIndex
        })
    },

    prev(){
        // index
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if(currentHistoryIndex !== 0){
            currentHistoryIndex -= 1;
            this.setState({
                currentHistoryIndex
            })
        }
        const history = this.state.history;
    },

    next(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if(currentHistoryIndex !== this.state.history.length - 1){
            currentHistoryIndex += 1;
            this.setState({
                currentHistoryIndex
            })
        }
        const history = this.state.history;
    },

    render() {
        console.log('render');
        return (
            <div>
                <div>
                    <button onClick={this.prev}>prev</button>
                    <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                    <button onClick={this.next}>next</button>
                </div>
                <input value={this.state.value} onChange={this.changeValue} type="text"/>
                <button onClick={this.save}>save</button>
            </div>
        )
    },

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.state.timer);
    }

})


ReactDOM.render(
    <div>
        <Item />
    </div>
    , document.getElementById('test')
)