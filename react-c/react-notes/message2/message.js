/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

// Node.js 核心技术之 事件
const eventbus = new eventemitter.EventEmitter();

const Comp = React.createClass({

    getInitialState(){

        return {
            colorIndex:0,
            colors:['yellow','red']
        }
    },

    componentWillMount(){
        eventbus.on('changeColor',  (id,color)=> {
            if(this.props.id !== id && this.state.colors[this.state.colorIndex] === color){
                this.changeColor();
            }
        });
    },

    //componentWillReceiveProps(nextProps){
    //    if(this.props.color !== nextProps.color){
    //        this.state.color = nextProps.color;
    //    }
    //},

    changeColor(){
        this.setState({colorIndex:this.state.colorIndex ? 0 : 1});
        setTimeout( ()=> {
            eventbus.emit('changeColor',this.props.id,this.state.colors[this.state.colorIndex]);
        },1500);
    },

    render(){
        return <div style={{backgroundColor:this.state.colors[this.state.colorIndex]}}>
            <p>{this.props.name}</p>
            <button onClick={this.changeColor}> click me </button>
        </div>
    }


});


ReactDOM.render(<div>
    <Comp id="one"/>
    <Comp id="two"/>
    </div>,document.body);