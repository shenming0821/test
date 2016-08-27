import React from 'react';

export default class Comp extends React.Component {

    constructor(){
        super();
        this.state = {num:0};
    }

    add() {
        this.setState({num: ++this.state.num});
    }

    render() {
        return <div>
            <a ref="aclick" href="#" onClick={this.add.bind(this)}>add</a>
            {this.state.num}
        </div>
    }
}