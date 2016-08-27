/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

import {createAction, createStore} from 'reflux';

import React from 'react';

import ReactDOM from 'react-dom';

const action = createAction();
const store = createStore({
    init() {
        this.num = 0;
        this.listenTo(action, this.onClick);
    },
    onClick() {
        this.trigger(++this.num);
    }
});

var UI = React.createClass({
    getInitialState: function () {
        return { num: 0 }
    },
    componentDidMount: function () {
        this.unsubscribe = store.listen(num => this.setState({ num }));
    },
    componentWillUnmount: function () {
        this.unsubscribe();
    },
    render: function () {
        return <div>
            {this.state.num}
            <button onClick={action}> +</button>
        </div>

    }
});

ReactDOM.render(<UI/>, document.body);