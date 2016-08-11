/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

const React = require('react');
const Item = React.createClass({

 getInitialState(){
  return {
   isEdit:true
  }
 },

 edit(){
  this.setState({isEdit:true});
 },

 remove(){
  this.props.onRemove(this.props.id);
 },

 save(){
  this.props.onSave(this.props.id, this.refs.inputText.value);
  this.setState({isEdit:false});
 },

 render(){

  return this.state.isEdit ? <li className="list-group-item">
   {this.props.id}
   <input className="item-edit" ref="inputText" defaultValue={this.props.value}/> <a href="#"
                                                                                     className="glyphicon glyphicon-share" onClick={this.save}> </a>
   <a href="#" className=" glyphicon glyphicon-remove" onClick={this.remove}></a>
  </li> :

      <li className="list-group-item"> {this.props.value} <a href="#"
                                                             className="right glyphicon glyphicon-edit"
                                                             onClick={this.edit}></a>
       <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
      </li>


 }
});


module.exports = Item;