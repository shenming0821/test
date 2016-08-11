/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

// props


const eventbus = new eventemitter.EventEmitter();


const Item = React.createClass({
    render(){

        let style = this.props.actived ? {border: "solid 1px green"} : {};

        return <li onClick={this.props.callback} style={style}>{this.props.name}</li>
    }
});

const Comp = React.createClass({

    getInitialState(){
        return {
            list: []
        }

    },

    componentWillMount(){
        
        this.props.bus.on('test event',  ()=> {
            console.log('handle is '+this.props.name);
        });
        
        this.state.list = this.props.data.map(item=> {
            return {name: item, actived: false}
        });
    },

    componentDidMount(){
        setTimeout(()=> {
            this.state.list[1].actived = true;
            this.forceUpdate();
        }, 3000);
    },

    callback(item){
        alert(item.name);
    },

    render(){
        return <ul>
            {this.state.list.map(item=> <Item callback={this.callback.bind(this,item)} actived={item.actived}
                                              name={item.name}/>)}
        </ul>
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
        <Comp bus={eventbus} name='comp one' data={list}/>
        <Comp bus={eventbus} name='comp two' data={list}/>
    </div>
    , document.body);


setTimeout(function () {
   eventbus.emit('test event');
},5000);