/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

const Comp = React.createClass({

    getInitialState(){
        return {
            top: 0,
            left: 0
        }
    },

    keyup(event){
        switch(event.keyCode){
            case 37:
                  this.setState({left:this.state.left-5});
                break;
            case 38:
                this.setState({top:this.state.top-5});
                break;
            case 39:
                this.setState({left:this.state.left+5});
                break;
            case 40:
                this.setState({top:this.state.top+5});
                break;
        }
    },

    render(){
        return <div ref={dom=>{if(dom) dom.focus()}} style={{position:'relative',width:"450px",height:'450px',background:'yellow'}} tabIndex={1}
                    onKeyDown={this.keyup}>
            <div
                style={{top:this.state.top+'px',left:this.state.left+'px',position:'absolute',width:"10px",height:'10px',background:'red'}}></div>
        </div>
    }
});

ReactDOM.render(<Comp/>, document.body);