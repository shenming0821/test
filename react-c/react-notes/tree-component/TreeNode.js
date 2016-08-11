/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

'uset strict';
const React = require('react');

const TreeNode = React.createClass({

    getInitialState(){
        return {
            open:true,
            open2:true,
            className:''
        }
    },

    onoff(){

        if(this.state.open){
            this.state.className = 'example-leave example-leave-active';
            this.state.open2 = false;
            this.forceUpdate();
            setTimeout( ()=> {
                this.setState({open:false})
            },200);
        }else{
            this.setState({open:true,open2:true,className : 'example-enter'});
            setTimeout(function() {
                this.setState({className : 'example-enter example-enter-active '});
            }.bind(this));
        }

    },

    mouseDownHandle(e){
        e.preventDefault();
        if(e.button === 2){
            this.props.openMenu(e.clientX,e.clientY,this.props.node.id);
        }
        return false;
    },

    render(){

        const nodeListDOM = [];

        const node = this.props.node;
        for (let nodeId of node.childIdsList) {
            var childNode = node.childs[nodeId];
            nodeListDOM.push(<TreeNode openMenu={this.props.openMenu} key={childNode.id} node={childNode}/>)
        }

        return <li >
                <h3 onMouseDown={this.mouseDownHandle}><a onClick={this.onoff} href="javascript:;"  ><i className={this.state.open2 ? 'glyphicon glyphicon-minus':'glyphicon glyphicon-plus'}></i></a> {node.data.title}</h3>
                <ul className = {this.state.className} style={{display:this.state.open ? 'block': 'none'}}>
                    {nodeListDOM}
                </ul>
            </li>;

    }
});

module.exports = TreeNode;