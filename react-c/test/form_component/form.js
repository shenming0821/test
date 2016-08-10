const Form = React.createClass({

    getInitialState() {
        return {
            inputValue: 'hehe',
            inputValue2: 'hehe2',
            checkboxValue: false,
            radioboxValue: false,
            selectArr: ['B','C']
        }
    },

    changeHandle(event) {
        this.setState({
            inputValue: event.target.value
        })
    },

    changeHandle2(event) {
        this.state.inputValue2 = event.target.value; // 可避免刷新
    },

    changeCheckboxHandle() {
        this.setState({
            checkboxValue: !this.state.checkboxValue
        })
    },

    changeRadioHandle() {
        this.setState({
            radioboxValue: !this.state.radioboxValue
        })
    },

    render() {
        return (
            <form>
                <input type="text" value={this.state.inputValue} onChange={this.changeHandle}/>
                <input type="text" defaultValue={this.state.inputValue2} onChange={this.changeHandle2}/>
                <input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckboxHandle}/>
                <input type="checkbox" defaultChecked/>
                <input type="radio" checked={this.state.radioboxValue} onChange={this.changeRadioHandle}/>
                <select value="B">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <textarea></textarea>
                <select multiple value={this.state.selectArr}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <textarea></textarea>
            </form>
        );
    }
});

ReactDOM.render(<Form />, document.getElementById('test'))