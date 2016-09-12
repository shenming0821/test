const React = require('react');
const Editor = require('./Editor');
const List = require('./List');
const redux = require('redux');
const {connect, Provider} = require('react-redux');
const ReactDOM = require('react-dom');
const Navbar = require('./Navbar');
const {Grid, Row, Col} = require('react-bootstrap');
const Login = require('./Login');
const thunk = require('redux-thunk').default;

function reducer(state, action) {
    if (typeof state === 'undefined') return { list: [] };
    switch (action.type) {
        case 'init':
            return action.payload;
        case 'add':
            let list = state.list.concat(action.payload);
            return Object.assign({}, state, { list });
        case 'logined':
            if (action.error) {
                return Object.assign({}, state, { loginError: action.payload, logined: false });
            } else {
                return Object.assign({}, state, { loginError: null, logined: true });
            }
        case 'logout':
            return Object.assign({}, state, { loginError: null, logined: false })
        default:
            return state;
    }
}

const store = redux.createStore(reducer, { list: [] }, redux.applyMiddleware(thunk));

const actions = {
    init() {
        return function (dispatch) {
            fetch("data.json").then(res => {
                res.json().then(data => {
                    dispatch({
                        type: "init",
                        payload: data
                    });
                })
            })
        }
    },
    submit(value) {
        return {
            type: 'add',
            payload: value
        }
    },
    login(info) {
        if (info.loginname === "hehe" && info.password === "123") {
            return {
                type: 'logined',
                payload: info
            }
        } else {
            return {
                type: 'logined',
                payload: new Error("登陆失败"),
                error: true
            }
        }
    },
    logout() {
        return {
            type: "logout"
        }
    }
}


let App = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
        return (
            <div>
                {Navbar}
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <List list={this.props.list} />
                        </Col>
                        <Col xs={6} md={4}>
                            {this.props.logined ? <div>登陆成功！<button onClick={this.props.logout}>注销</button> </div> : <Login loginError={this.props.loginError} login={this.props.login}/>}
                        </Col>
                    </Row>
                </Grid>
                <Editor submit={this.props.submit} />
            </div>
        );
    }
})

App = connect(state => state, actions)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.body
);
