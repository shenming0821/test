const eventbus = new eventemitter.EventEmitter();

const Comp = React.createClass({
    getInitialState() {
        return {
            colorIndex: 0,
            colors: ['yellow', 'red']
        }
    },

    componentWillMount() {
        eventbus.on('changeColor', (id, color) => {
            if (this.props.id !== id && this.state.colors[this.state.colorIndex] == color) {
                console.log('if');
                this.changeColor();
            }
        })
    },

    changeColor() {
        this.setState({ colorIndex: this.state.colorIndex ? 0 : 1 });
        setTimeout(() => {
            console.log('setTimeout  ' + this.props.id);
            eventbus.emit('changeColor', this.props.id, this.state.colors[this.state.colorIndex]);
        }, 1500);
    },

    render() {
        return (
            <div style={{ backgroundColor: this.state.colors[this.state.colorIndex] }}>
                <p>{this.props.name}</p>
                <button onClick={this.changeColor}>click me</button>
            </div>
        );
    }

});

ReactDOM.render(
    <div>
        <Comp id='one'/>
        <Comp id='two'/>
    </div>
    , document.body
);