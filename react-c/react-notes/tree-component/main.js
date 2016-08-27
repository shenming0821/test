

const ReactDOM = require('react-dom');
const React = require('react');
const Tree = require('./Tree');
const TNode = require("tree-node");

var root = new TNode();



var n1 = new TNode;
n1.data('title','1111');
n1.data('op',true);
var n2 = new TNode;
n2.data('title','2222');
n2.data('op',true);




root.appendChild(n1).appendChild(n2);

var n3 = new TNode;
n3.data('title','3333');
n3.data('op',true);

var n4 = new TNode;
n4.data('title','4444');
n4.data('op',true);


n2.appendChild(n3).appendChild(n4);


ReactDOM.render(<Tree json={root.json}/>,document.getElementById('tree1'));



