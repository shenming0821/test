import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { connect , Provider } from "react-redux";
import reducer  from "./reducer";
import {createStore} from "redux";

const store = createStore(reducer);
// React.createElement
ReactDOM.render(<Provider store={store}> 
    <App />
</Provider>,document.body)
