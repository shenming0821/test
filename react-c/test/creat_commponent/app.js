
//ES6
class Item extends React.Component {

    constructor(props) {
        super(props);

        // 状态初始化 getInitialState  ==>
        this.state = {
            result: 123
        }
    }


    //getDefaultProps ==>
    static defaultProps() {
        return {
            groups: 'javascript'
        }
    }

    //mixin: [fun], // es6 不支持

    test() {
        alert('test-click' + this.props.group);
    }

    render() {
        return (
            <div>
                {this.props.group}
                <button onClick={this.test.bind(this)}>click me!</button> // 不能自动绑定，需要bind绑定this
            </div>
        );
    }
}

ReactDOM.render(<Item group=" new-hello" />, document.body)