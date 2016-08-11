/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */
'use strict';
const Dispatcher = require('flux').Dispatcher;
const dispatcher = new Dispatcher;
const Store = require('flux/utils').Store;

class MyStore extends Store {

    constructor(dispatcher) {
        super(dispatcher);
        this.data = '';
    }

    // 2
    __onDispatch(action) {

        switch (action.type) {
            case 'update':
                this.__changed = true;
                this.data += action.data;
                break;

        }
    }

}

let store = new MyStore(dispatcher);
let store2 = new MyStore(dispatcher);

// UI
store.addListener(function callback(args){
    console.log('args = ',args);
    console.log('data => ',store.data);
});

store2.addListener(function callback(args){
    console.log('args = ',args);
    console.log('data => ',store.data);
});

// UI -> CLICK -> ACTION 1
dispatcher.dispatch({
    type:'update',
    data:'leo'
});

