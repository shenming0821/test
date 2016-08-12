const Comp = React.createClass({

    getInitialState() {
        return{
            name: '',
            group: ''
        }
    },

    changeNameHandle() {
        this.setState({ name:event.target.value});
    },

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.changeNameHandle}/>
            </div>
        );
    }
});

ReactDOM.render(<Comp onChangeName={changeNameHandle}/>, document.getElementById('test'));