/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

const Form = React.createClass({

    getInitialState(){
        return {
            inputValue:'leo',
            inputValue2:'',
            checkboxValue:false,
            radioValue:false,
            arr:['B','C']
        }
    },

    changeHandle(event){
        //this.state.inputValue = event.target.value;
        //this.forceUpdate();
        //
        this.setState({
            inputValue:event.target.value
        });
    },
    changeHandle2(event){
        //this.state.inputValue = event.target.value;
        //this.forceUpdate();
        //

        this.state.inputValue2 = event.target.value;

    },

    changeCheckboxHandle(){
        this.setState({
            checkboxValue:!this.state.checkboxValue
        });
    },

    changeRadioHandle(){
        this.setState({
            radioValue:!this.state.radioValue
        });
    },

    render(){
        return <form>
            <input type="text" defaultValue="liang" onChange={this.changeHandle2} />
            <input type="text" value={this.state.inputValue} onChange={this.changeHandle} />
            <input type="checkbox" defaultChecked />
            <input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckboxHandle}/>
            <input type="radio" checked={this.state.radioValue} onChange={this.changeRadioHandle}/>
            <select value="B" >
                <option value="A">Aaaa</option>
                <option value="B">Bbbb</option>
                <option value="C">Cccc</option>
            </select>
            <select multiple value={this.state.arr}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <textarea defaultValue="okok text"></textarea>
        </form>
    }
});

ReactDOM.render(<Form/>, document.body);

setTimeout(function () {
    ReactDOM.render(<Form/>, document.body);

},5000);