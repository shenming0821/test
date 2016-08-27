import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Comp from '../components/Comp.js';
import React from 'react';
import window from './util/vdom.js';
import should from 'should';

describe('Comp', ()=> {
    window();
    it("test", ()=> {
        const comp = TestUtils.renderIntoDocument(<Comp/>);
        const buttonDOM = ReactDOM.findDOMNode(comp.refs.aclick);
        TestUtils.Simulate.click(buttonDOM);

        comp.state.num.should.eql(1);


    })

});