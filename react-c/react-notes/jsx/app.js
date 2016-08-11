// Item
const Item = React.createClass({


    render(){
        return React.createElement('li',null,'abcd1234');
        return <div>
            <span>1111</span>
            <span>1111</span>
            <span>1111</span>
            <span>1111</span>
        </div>

        return React.createElement('div',{style:{backgroundColor:false ? 'red':'green'}},
            React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121'),

            true ? React.createElement('span',null,'2121'):  React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121')
        )
    }
});


const bool = false;
const result = [];

//if(bool){
//    result.push(<Item/>);
//    result.push(<Item/>);
//}else{
//    result.push(<h1>111</h1>)
//    result.push(<h1>111</h1>)
//}
//
//ReactDOM.render(<ul style={ {backgroundColor: bool?'yellow':'red'} } abc="123">
//    { result }
//    <Item/>
//</ul>, document.getElementById('test'));
//

if (bool) {
    result.push(React.createElement(Item));
    result.push(React.createElement(Item));
} else {
    result.push(React.createElement('h1', null, '222'))
    result.push(React.createElement('h1', null, '222'))
}

//Webkit
//margin-top -> marginTop
ReactDOM.render(
    React.createElement('ul',
        {style: { backgroundColor: bool ?'yellow':'red'}, abc: 123} // props
        , [
            //bool ? React.createElement(Item) : React.createElement('h1',null,'myname'),
            result,
            React.createElement(Item)]
    ) // <h1> title </h1>
    , document.getElementById('test'));