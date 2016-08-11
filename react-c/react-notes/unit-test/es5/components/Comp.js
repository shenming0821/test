"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                联系方式: forjs.org  QQ 1405491181  微信公众号 forjs_org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                视频版权所有: 曾亮 <1405491181@qq.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                淘宝店出售、云盘下载和个人私下出售本课程的，均为盗版。未经许可，不可对此视频翻录和用于商业用途，违者必究。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                购买到盗版的学员，可与作者联系,有奖励+赠送一套课程。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                【会员】可免费学习曾老师发布的所有课程，和会员有效期内讲师新发布的所有课程。可咨询QQ 1405491181
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Comp = function (_React$Component) {
    _inherits(Comp, _React$Component);

    function Comp() {
        _classCallCheck(this, Comp);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Comp).call(this));

        _this.state = { num: 0 };
        return _this;
    }

    _createClass(Comp, [{
        key: "add",
        value: function add() {
            this.setState({ num: ++this.state.num });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "a",
                    { ref: "aclick", href: "#", onClick: this.add.bind(this) },
                    "add"
                ),
                this.state.num
            );
        }
    }]);

    return Comp;
}(_react2.default.Component);

exports.default = Comp;