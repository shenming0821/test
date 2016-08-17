const Comp = React.createClass({

    getInitialState(){
        return {
            name: '',

            group:''
        }
    },

    changeHandle(event){
        this.setState({name: event.target.value});
        this.props.onChangeName(this.state.name);
    },

    render(){
        return <div>
            <input type='text' value={this.state.name} onChange={this.changeHandle}/>
        </div>
    }
});

function changeNameHandle(name) {
    console.log(name);
}

ReactDOM.render(<Comp onChangeName={changeNameHandle}/>, document.body);