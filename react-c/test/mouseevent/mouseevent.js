const data = new Map();
data.set('id001', '001');
data.set('id002', '002');
data.set('id003', '003');
data.set('id004', '004');

const DND = React.createClass({

    getInitialState() {
        return {
            dargId: null,
            rightdata: this.props.data,
            leftdata: new Map()
        }
    },

    drag(event) {
        this.state.dragId = event.target.id;
    },

    drop() {
        let value = this.state.rightdata.get(this.state.dragId);
        this.state.leftdata.set(this.state.dragId, value);
        this.state.rightdata.delete(this.state.dragId);
        this.forceUpdate();
    },

    drop2() {
        let value = this.state.leftdata.get(this.state.dragId);
        this.state.rightdata.set(this.state.dargId,value);
        this.state.leftdata.delete(this.state.dragId);
        this.forceUpdate();
    },

    render() {
        const leftDomList = [];
        const rightDomList = [];

        for (let item of this.state.rightdata) {
            rightDomList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }

        for (let item of this.state.leftdata) {
            leftDomList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }

        return (
            <div>
                <div id="leftsection"
                    onDragEnter={e => e.preventDefault() }
                    onDragOver={e => e.preventDefault() }
                    onDrop={this.drop}>
                    {leftDomList}
                </div>
                <div id="rightsection"
                    onDragEnter={e => e.preventDefault() }
                    onDragOver={e => e.preventDefault() }
                    onDrop={this.drop2}>
                    {rightDomList}
                </div>
            </div>
        )
    }
});


ReactDOM.render(<DND data={data}/>, document.getElementById('test'));