'use strict';

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Comp = require('../components/Comp.js');

var _Comp2 = _interopRequireDefault(_Comp);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vdom = require('./util/vdom.js');

var _vdom2 = _interopRequireDefault(_vdom);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
 视频版权所有: 曾亮 <1405491181@qq.com>
 淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
 购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
 【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
 */

describe('Comp', function () {
    (0, _vdom2.default)();
    it("test", function () {
        var comp = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Comp2.default, null));
        var buttonDOM = _reactDom2.default.findDOMNode(comp.refs.aclick);
        _reactAddonsTestUtils2.default.Simulate.click(buttonDOM);

        comp.state.num.should.eql(1);
    });
});