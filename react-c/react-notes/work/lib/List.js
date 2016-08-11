/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */
const React = require('react');
const Item = require('./Item');
const List = React.createClass({

 getInitialState(){
  return {
   key: 0,
   list: new Map()
  }
 },

 add(){
  const key = ++this.state.key;
  this.state.list.set(key, '');
  this.forceUpdate();
 },

 removeItem(id){
  this.state.list.delete(id);
  this.forceUpdate();
 },

 save(id, value){
  this.state.list.set(id, value);
  this.forceUpdate();
 },

 render(){

  const listDOM = [];

  // <javascript es6 实战>

  for (let entity of this.state.list) {
   listDOM.push(<Item id={entity[0]} key={entity[0]} onRemove={this.removeItem} onSave={this.save}
                      value={entity[1]}/>);
   //listDOM.push(React.createElement(Item,{id,key}));
  }


  return <div>
   <button onClick={this.add} className="btn btn-default">Add</button>
   <ul className="list-group">
    {listDOM}
   </ul>
  </div>
 }
});

module.exports = List;