/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher');

class Store extends EventEmitter {

    constructor() {

        super();

        this._list = [];

        Dispatcher.register(action=> {
            switch (action.actionType) {
                case 'add':
                    this._add(action.name);
                    break;
                case 'getAll':
                    this._list = action.list;
                    this.emit("change", this.list); // 触发change事件
                    break;

            }
        });


    }

    _add(item) {
        this._list.push(item);
        this.emit("change", this.list); // 触发change事件
    }

    get list() {
        return this._list;
    }

}

module.exports = Store;