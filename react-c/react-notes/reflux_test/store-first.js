/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

const Reflux = require('reflux');

const action = Reflux.createAction();

const store = Reflux.createStore({

    //data:{num:0},

    init(){
        this.data  = {num:0};
        this.listenTo(action, function(){
            ++this.data.num;
            this.trigger(this.data);
        });
    },

    onClick(data){
        ++this.data.num;
        this.trigger(this.data);
    }
});


store.listen(function (state) {
    console.log(state)
});

action();
action();
action();
action();
action();