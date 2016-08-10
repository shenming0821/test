const Comp = React.createClass({


    click(){
        this.refs.myinput.focus();
    },

    componentDidMount() {
        this.refs.myinput2.focus();
    },

    render(){
        return (
            <div>
                <input ref={function(dom){ dom.focus(); }}/>
                <input ref="myinput"/>
                <input ref="myinput2"/>
                <button onClick={this.click}>click me!</button>
            </div>
        )
    }
});

ReactDOM.render(<Comp />,document.getElementById('test'));

// ref={ function(){} }中函数的调用优先于componentDidMount