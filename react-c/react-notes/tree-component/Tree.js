/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

'uset strict';
const React = require('react');
const TNode = require('tree-node');
const TreeNode = require('./TreeNode');

const Tree = React.createClass({


    getInitialState(){
        return {
            treeData: new TNode,
            menuX: 0,
            menuY: 0,
            menuDisplay: false,
            childId:null
        }
    },

    componentWillMount(){
        if (this.props.json) {
            this.state.treeData.reborn(this.props.json)
        }
    },

    openMenu(x, y,childId){
        this.setState({
            menuX: x,
            menuY: y,
            menuDisplay: true,
            childId
        })
    },

    add(){
        var title = window.prompt("title");
        var child = new TNode();
        child.data('title',title);
        this.state.treeData.getNode(this.state.childId).appendChild(child);
        this.closeMenu();
    },

    del(){
        this.state.treeData.removeChild(this.state.childId);
        this.closeMenu();
    },

    up(){
        this.state.treeData.up(this.state.childId);
        this.closeMenu();
    },

    down(){
        this.state.treeData.down(this.state.childId);
        this.closeMenu();
    },

    closeMenu(){
        this.setState({menuDisplay:false});
    },

    render(){

        const nodeListDOM = [];

        for (let nodeId of this.state.treeData.childIds) {
            var childNode = this.state.treeData.getNode(nodeId);
            nodeListDOM.push(<TreeNode openMenu={this.openMenu} key={childNode.id} node={childNode.json}/>)
        }

        return <div onContextMenu={e=>{e.preventDefault();return false}}>
            <ul >
                {nodeListDOM}
            </ul>
            <div onMouseLeave={this.closeMenu} style={{
            display:this.state.menuDisplay? 'block':'none',
            left:this.state.menuX,
            top:this.state.menuY,
            position:'absolute'}}>
                <ul className={"list-group"}>
                    <li className="list-group-item"><a href="javascript:;"  onClick={this.add}>添加</a></li>
                    <li className="list-group-item"><a href="javascript:;" onClick={this.del}>删除</a></li>
                    <li className="list-group-item"><a href="javascript:;" onClick={this.up}>上移</a></li>
                    <li className="list-group-item"><a href="javascript:;" onClick={this.down}>下移</a></li>
                </ul>
            </div>
        </div>

    }
});

module.exports = Tree;