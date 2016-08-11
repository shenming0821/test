/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
 getInitialState: function() {
  return {items: ['hello', 'world', 'click', 'me']};
 },
 handleAdd: function() {
  var newItems =
      this.state.items.concat([prompt('Enter some text')]);
  this.setState({items: newItems});
 },
 handleRemove: function(i) {
  var newItems = this.state.items.slice();
  newItems.splice(i, 1);
  this.setState({items: newItems});
 },
 render: function() {
  var items = this.state.items.map(function(item, i) {
   return (
       <div key={item} onClick={this.handleRemove.bind(this, i)}>
        {item}
       </div>
   );
  }.bind(this));
  return (
      <div>
       <button onClick={this.handleAdd}>Add Item</button>
       <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>
        {items}
       </ReactCSSTransitionGroup>
      </div>
  );
 }
});

ReactDOM.render(<TodoList/>,document.body);

// web components
