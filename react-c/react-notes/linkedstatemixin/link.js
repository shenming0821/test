

const LinkedStateMixin = React.addons.LinkedStateMixin;

const Comp = React.createClass({

    displayName: 'Comp',

    //mixins:[LinkedStateMixin],

    getInitialState(){
        return {
            name: '',
            name2:'',
            name3:'',
            name4:''
        }
    },

    linkState(key){

        return {
            value: this.state[key],
            requestChange: (newValue)=> {

                //

                this.setState({[key]: newValue})
            }
        };
    },




    render(){

        return <div>
            <p> {this.state.name}</p>

            <p> {this.state.name2}</p>

            <p> {this.state.name3}</p>

            <p> {this.state.name4}</p>

            <input type='text'  valueLink={this.linkState('name')}/>
            <input type='text' valueLink={this.linkState('name2')}/>
            <input type='text' valueLink={this.linkState('name3')}/>
            <input type='text' defaultValue={this.state.name4} />

        </div>
    }
});

ReactDOM.render(<Comp/>, document.body);