const React = require('react');
const ReactDOM = require('react-dom');
const {FormGroup, ControlLabel, FormControl, Button} = require('react-bootstrap');

const Login = React.createClass({
    login() {
        const loginnameDOM = ReactDOM.findDOMNode(this.refs.loginname);
        const passwordDOM = ReactDOM.findDOMNode(this.refs.password);

        this.props.login({ loginname: loginnameDOM.value, password: passwordDOM.value });

        loginnameDOM.value = "";
        passwordDOM.value = "";
    },
    render() {
        return (
            <form>
                <FormGroup controlId="formControlsText" validationState={this.props.loginError ? "error" : ""}>
                    <ControlLabel>登陆名称{this.props.loginError ? this.props.loginError.message : ""}</ControlLabel>
                    <FormControl type="text" ref="loginname" />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>登陆密码</ControlLabel>
                    <FormControl type="password" ref="password" />
                </FormGroup>
                <div>
                    <Button onClick={this.login} > 登陆 </Button>
                </div>
            </form>
        );
    }
});

module.exports = Login;