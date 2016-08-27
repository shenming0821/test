const exf = {
    test(){
        alert('ok test mixins!' + this.props.group);
    }
};

// React.Component sub class
const Item = React.createClass(
    {

        displayName: 'Item', // test

        getDefaultProps(){
            return {
                group: 'javascript'
            }
        },

        getInitialState(){
           return {
               result:123
           }
        },

        //test(){
        //
        //},

        mixins: [exf],

        // prototype
        render(){
            // null
            // false
            // Element object

            // jsx
            return <div>{this.props.group}

                <button onClick={this.test}>click me!</button>
            </div>;
            //return React.createElement('div', null, this.props.group);
        }
    }
);

// ES6
// <javascript ES6 实战视频课程>
class Item extends React.Component {


    constructor(props){
        super(props);

        // getInitialState
        this.state = {
            result:123
        }
    }

    // getDefaultProps
    static defaultProps() {
        return {
            group: 'javascript'
        }
    }

    //mixins: [exf], // es6 不支持混合

    test(){
        alert('ok test mixins!' + this.props.group);
        this.props.onClick("xxxx");
    }

    render() {
        // null
        // false
        // Element object

        // jsx
        return <div>{this.props.group}

            <button onClick={this.test.bind(this)}>click me!</button>
        </div>;
        //return React.createElement('div', null, this.props.group);
    }
}

function clickHandle(event){}


// displayName = 'Item';
ReactDOM.render(<Item onClick={clickHandle} group='hello'/>, document.body);