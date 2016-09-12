const React = require('react');
const {FormGroup, ControlLabel, FormControl, Button} = require("react-bootstrap");
const ReactDOM = require('react-dom');

// props {submit(action)}
const Editor = React.createClass({
    submit() {
        let titleDOM = ReactDOM.findDOMNode(this.refs.title);
        let bodyDOM = ReactDOM.findDOMNode(this.refs.body);

        this.props.submit({ title: titleDOM.value, body: bodyDOM.value }); // action
        titleDOM.value = '';
        bodyDOM.value = '';
    },
    render() {
        return (
            <form>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>标题</ControlLabel>
                    <FormControl type="text" ref="title" />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>内容</ControlLabel>
                    <FormControl componentClass="textarea" ref="body" />
                </FormGroup>
                <div>
                    <Button onClick={this.submit} > 添加 </Button>
                </div>
            </form>
        );
    }
})

module.exports = Editor;