/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

const React = require('react');
const Dispatcher = require('flux').Dispatcher;
const dispatcher = new Dispatcher;
const Store = require('flux/utils').Store;
const ReactDOM = require('react-dom');

class ListStore extends Store {
    constructor(dispatcher) {
        super(dispatcher);
        this.state = [];
    }

    __onDispatch(action) {
        switch (action.type) {
            case 'add':
                this.__changed = true;
                this.state.push(action.item);
                break;
        }
    }
}

let store = new ListStore(dispatcher);

class ContainerUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        this.remove = store.addListener(()=> this.setState({list: store.state}))
    }

    componentWillUnmount() {
        this.remove();
    }

    click() {
        let value = this.refs.input.value;
        let addAction = {
            type: 'add',
            item: value
        };
        dispatcher.dispatch(addAction);
    }

    render() {
        let list = this.state.list.map(item=><li>{item}</li>);

        return <ul>
            <li>
                <input type='text' ref='input'/>
                <button onClick={this.click.bind(this)}> add</button>
            </li>
            {list}

        </ul>
    }
}


ReactDOM.render(<ContainerUI/>,document.body);