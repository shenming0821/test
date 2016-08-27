
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

    getDefaultProps(){

        return {
            value: 'no value'
        }
    },


    getInitialState(){
        return {
            value: this.props.value,
            currentHistoryIndex: 0,
            history: [this.props.value]
        }
    },

    componentWillMount(){
        this.state.dbkey = database.add({value: this.state.value});
    },

    componentDidMount(){

        let isYellow = false;
        const dom = ReactDOM.findDOMNode(this);
        this.state.loopNum = setInterval(function () {
            if (isYellow) {
                dom.style.backgroundColor = 'red';
                isYellow = false;
            } else {
                dom.style.backgroundColor = 'yellow';
                isYellow = true;
            }

        }, 1000);
    },

    componentWillReceiveProps(nextProps){
        this.state.value = nextProps.value;
    },

    shouldComponentUpdate(nextProps, nextState){

        return true;
    },

    componentWillUpdate(nextProps, nextState){

        // setState & forceUpdate
        let dbkey = this.state.dbkey;
        database.update(dbkey, {value: this.state.value});
    },

    // render ()

    componentDidUpdate(oldProps, oldState){
        let dom = ReactDOM.findDOMNode(this);

        let oldStyle = dom.style.border;
        dom.style.border = '2px solid red';
        setTimeout(function () {
            dom.style.border = oldStyle;
        }, 2000);
    },

    changeValue(event){
        this.setState({value: event.target.value});
    },

    save(){ // hisitory
        //this.state.history.push(this.state.value);
        //this.state.currentHisotry = this.state.value;

        // javascript es6 实战
        const value = this.state.value;
        const history = this.state.history;
        const currentHistoryIndex = history.length ;

        history.push(value);

        this.setState({
            history, currentHistoryIndex
        });
    },

    prev(){

        // index

        let currentHistoryIndex = this.state.currentHistoryIndex;
        if(currentHistoryIndex !== 0){
            currentHistoryIndex -= 1;
            this.setState({currentHistoryIndex});
        }

    },

    next(){
        let currentHistoryIndex = this.state.currentHistoryIndex;

        if(currentHistoryIndex !== this.state.history.length -1 ){
            currentHistoryIndex += 1;
            this.setState({currentHistoryIndex});
        }
    },

    render(){
        return <div>
            <div>
                <button onClick={this.prev}> prev</button>
                <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                <button onClick={this.next}> next</button>
            </div>
            <input value={this.state.value} onChange={this.changeValue}/>
            <button onClick={this.save}>save</button>
        </div>
    },

    componentWillUnmount(){
        console.log('component will Unmount');
        clearInterval(this.state.loopNum);
    }

});

ReactDOM.render(
    <div>
        <Item group disable />
    </div>
    , document.getElementById('test')
);