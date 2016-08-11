/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */


const data = new Map();

data.set('id001', 'id001');
data.set('id002', 'id002');
data.set('id003', 'id003');
data.set('id004', 'id004');

const DND = React.createClass({


    getInitialState(){
        return {
            dragId:null,
            rightdata: this.props.data,
            leftdata: new Map()
        }
    },

    drag(event){
        this.state.dragId = event.target.id;
    },

    drop(event){
        var value = this.state.rightdata.get(this.state.dragId);
        this.state.leftdata.set(this.state.dragId,value);
        this.state.rightdata.delete(this.state.dragId);
        this.forceUpdate();
    },

    drop2(event){
        var value = this.state.leftdata.get(this.state.dragId);
        this.state.rightdata.set(this.state.dragId,value);
        this.state.leftdata.delete(this.state.dragId);
        this.forceUpdate();
    },

    render(){

        const rightList = [];
        const leftList = [];

        for (let item of this.state.rightdata) {
            rightList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }

        for (let item of this.state.leftdata) {
            leftList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }

        return <div>
            <div id='leftsection'
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.drop}>
                {leftList}
            </div>
            <div id='rightsection'
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.drop2}
                >
                {rightList}
            </div>
        </div>
    }

});


ReactDOM.render(<DND data={data}/>, document.getElementById('one'));
ReactDOM.render(<DND data={data}/>, document.getElementById('two'));