

const Item = React.createClass({

    displayName: 'Item',

    getDefaultProps(){
        console.log('get default props');
        return {
            group: 123
        }
    },


    getInitialState(){
        console.log('get initial state');
        return {
            name: 'leo'
        }
    },

    componentWillMount(){
        console.log('component will mount');
        this.state.name ='liang';

        // have error !
        //const dom = ReactDOM.findDOMNode(this);
    },

    componentDidMount(){
        console.log('component did mount');
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom)

        let isYellow = false;

        this.state.loopnum = setInterval(function () {
            console.log('choose color');
            if(isYellow){
                dom.style.backgroundColor = 'red';
                isYellow = false;
            }else{
                dom.style.backgroundColor = 'yellow';
                isYellow = true;
            }

        },1000);
    },

    componentWillReceiveProps(nextProps){
        console.log('component will receive props');
    },

    shouldComponentUpdate(nextProps,nextState){
        console.log('should component update');
        return false;
    },

    componentWillUpdate(nextProps,nextState){
        console.log('component will update');
    },

    componentDidUpdate(oldProps,oldState){
        console.log('component did update');
    },

    update(){
        this.setState({name:'zeng'});
        //this.forceUpdate();
    },

    render(){
        console.log('render');
        return <div> {this.props.group + this.state.name}  <button onClick={this.update}>update</button></div>
    },

    componentWillUnmount(){
        clearInterval(this.state.loopnum);
    }

});


function render(bool){
    ReactDOM.render(
        <div>
            <button>ccc</button>
            {bool ? "" : <Item />}
        </div>
        ,document.getElementById('test'));
}


render();

document.getElementById('unmount_button').onclick = function(){
    render(true);
};
