/**
 创建时间 16/3/4
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 奖励: 购买到盗版的学员,可与作者联系,有奖励.
 */

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

        this.state.loopNum = setInterval(function () {
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
        return true;
    },

    componentWillUpdate(nextProps,nextState){
        console.log('component will update');

        // dom
    },

    // render ()

    componentDidUpdate(oldProps,oldState){
        console.log('component did update');

        // dom
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
        console.log('component will Unmount');
        clearInterval(this.state.loopNum);
    }

});


function render(bool){
    ReactDOM.render(
        <div>
            {bool ? <Item /> : ''}
        </div>
        ,document.getElementById('test'));
}

//const List = React.createClass({
//    render(){
//        return <div>
//            <Item group={...} />
//        </div>
//    }
//})
render(true);

document.getElementById('clear').onclick = function(){
    render(false);
};

document.getElementById('new').onclick = function(){
    render(true);
};
