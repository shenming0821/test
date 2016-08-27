
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