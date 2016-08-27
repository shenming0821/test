const Comp = React.createClass({

    click(){
        this.refs.myinput.focus();
    },

    componentDidMount(){
        this.refs.myinput2.focus();
        console.log('component did mount')
    },

    render(){
        return <div>
            <input ref={function(dom){ dom.focus(); console.log('ref function') }}/>
            <input ref="myinput"/>
            <input ref="myinput2"/>
            <button onClick={this.click}>click me!</button>
        </div>
    }
});

ReactDOM.render(<Comp/>, document.body);