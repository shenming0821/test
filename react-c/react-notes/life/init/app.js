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

    render(){
        return <div> {this.props.group + this.state.name} </div>
    }

});


ReactDOM.render(
    <div>
    <Item/>
    <Item/>
    <Item/>
    </div>
    ,document.body);
