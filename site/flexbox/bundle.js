(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _flexbox = require('../lib/flexbox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _flexbox.HBox,
  { style: { color: 'yellow', backgroundColor: 'green' } },
  _react2.default.createElement(
    'div',
    null,
    'Alpha'
  ),
  _react2.default.createElement(
    'div',
    null,
    'Beta'
  ),
  _react2.default.createElement(
    _flexbox.VBox,
    { className: 'vert', style: { color: 'steelblue', backgroundColor: 'lavender' } },
    _react2.default.createElement(
      'div',
      null,
      'One'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Two'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Three'
    )
  ),
  _react2.default.createElement(
    'div',
    null,
    'Gamma'
  )
), document.getElementById('example-1'));

_reactDom2.default.render(_react2.default.createElement(
  _flexbox.VBox,
  { style: { color: 'blue', border: '1px dashed gray' } },
  _react2.default.createElement(
    'div',
    null,
    'One'
  ),
  _react2.default.createElement(
    _flexbox.HBox,
    { style: { color: 'purple', border: '2px dotted red' } },
    _react2.default.createElement(
      'div',
      null,
      'Apple'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Banana'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Cauliflower'
    )
  ),
  _react2.default.createElement(
    'div',
    null,
    'Two'
  ),
  _react2.default.createElement(
    'div',
    null,
    'Three'
  ),
  _react2.default.createElement(
    _flexbox.HBox,
    { style: { color: 'brown', backgroundColor: 'lightgray' } },
    _react2.default.createElement(
      'div',
      null,
      'Four'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Five'
    ),
    _react2.default.createElement(
      _flexbox.VBox,
      null,
      _react2.default.createElement(
        'div',
        null,
        'Aardvark'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Baboon'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Canary'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Six'
    )
  )
), document.getElementById('example-2'));

},{"../lib/flexbox":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HBox = exports.VBox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VBox = exports.VBox = (function (_React$Component) {
  _inherits(VBox, _React$Component);

  function VBox() {
    _classCallCheck(this, VBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(VBox).apply(this, arguments));
  }

  _createClass(VBox, [{
    key: 'render',
    value: function render() {
      return renderBox(false, this.props);
    }
  }]);

  return VBox;
})(_react2.default.Component);

var HBox = exports.HBox = (function (_React$Component2) {
  _inherits(HBox, _React$Component2);

  function HBox() {
    _classCallCheck(this, HBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HBox).apply(this, arguments));
  }

  _createClass(HBox, [{
    key: 'render',
    value: function render() {
      return renderBox(true, this.props);
    }
  }]);

  return HBox;
})(_react2.default.Component);

function renderBox(isHorizontal, props) {
  var className = isHorizontal ? 'hbox' : 'vbox';

  // Merge style.
  var newStyle = Object.assign({}, props.style);
  Object.assign(newStyle, {
    display: 'flex',
    flexDirection: isHorizontal ? 'row' : 'column' });

  return _react2.default.createElement(
    'div',
    _extends({}, props, { className: className, style: newStyle }),
    props.children
  );
}

},{"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNpdGUvZmxleGJveC9hcHAuanMiLCJzaXRlL2xpYi9mbGV4Ym94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNLQSxtQkFBUyxNQUFNLENBQ2I7V0FKTSxJQUFJO0lBSUosS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFDLEFBQUM7RUFDdkQ7Ozs7R0FBZ0I7RUFDaEI7Ozs7R0FBZTtFQUNmO2FBUFUsSUFBSTtNQU9SLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFDLEFBQUM7SUFDOUU7Ozs7S0FBYztJQUNkOzs7O0tBQWM7SUFDZDs7OztLQUFnQjtHQUNYO0VBQ1A7Ozs7R0FBZ0I7Q0FDWCxFQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQ3JDLENBQUE7O0FBRUQsbUJBQVMsTUFBTSxDQUNiO1dBbEJZLElBQUk7SUFrQlYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUMsQUFBQztFQUN0RDs7OztHQUFjO0VBQ2Q7YUFwQkksSUFBSTtNQW9CRixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQyxBQUFDO0lBQ3ZEOzs7O0tBQWdCO0lBQ2hCOzs7O0tBQWlCO0lBQ2pCOzs7O0tBQXNCO0dBQ2pCO0VBQ1A7Ozs7R0FBYztFQUNkOzs7O0dBQWdCO0VBQ2hCO2FBM0JJLElBQUk7TUEyQkYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFDLEFBQUM7SUFDMUQ7Ozs7S0FBZTtJQUNmOzs7O0tBQWU7SUFDZjtlQTlCUSxJQUFJOztNQStCVjs7OztPQUFtQjtNQUNuQjs7OztPQUFpQjtNQUNqQjs7OztPQUFpQjtLQUNaO0lBQ1A7Ozs7S0FBYztHQUNUO0NBQ0YsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUNyQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RDWSxJQUFJLFdBQUosSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDTjtBQUNQLGFBQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDcEM7OztTQUhVLElBQUk7R0FBUyxnQkFBTSxTQUFTOztJQU81QixJQUFJLFdBQUosSUFBSTtZQUFKLElBQUk7O1dBQUosSUFBSTswQkFBSixJQUFJOztrRUFBSixJQUFJOzs7ZUFBSixJQUFJOzs2QkFDTjtBQUNQLGFBQU8sU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbkM7OztTQUhVLElBQUk7R0FBUyxnQkFBTSxTQUFTOztBQU96QyxTQUFTLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLE1BQUksU0FBUyxHQUFHLFlBQVksR0FBRyxNQUFNLEdBQUcsTUFBTTs7O0FBQUEsQUFHOUMsTUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzdDLFFBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ3RCLFdBQU8sRUFBRSxNQUFNO0FBQ2YsaUJBQWEsRUFBRSxZQUFZLEdBQUcsS0FBSyxHQUFHLFFBQVEsRUFBQyxDQUFDLENBQUE7O0FBRWxELFNBQU87O2lCQUFTLEtBQUssSUFBRSxTQUFTLEVBQUUsU0FBUyxBQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsQUFBQztJQUMxRCxLQUFLLENBQUMsUUFBUTtHQUNYLENBQUE7Q0FDUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtIQm94LCBWQm94fSBmcm9tICcuLi9saWIvZmxleGJveCdcblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxIQm94IHN0eWxlPXt7Y29sb3I6ICd5ZWxsb3cnLCBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbid9fT5cbiAgICA8ZGl2PkFscGhhPC9kaXY+XG4gICAgPGRpdj5CZXRhPC9kaXY+XG4gICAgPFZCb3ggY2xhc3NOYW1lPSd2ZXJ0JyBzdHlsZT17e2NvbG9yOiAnc3RlZWxibHVlJywgYmFja2dyb3VuZENvbG9yOiAnbGF2ZW5kZXInfX0+XG4gICAgICA8ZGl2Pk9uZTwvZGl2PlxuICAgICAgPGRpdj5Ud288L2Rpdj5cbiAgICAgIDxkaXY+VGhyZWU8L2Rpdj5cbiAgICA8L1ZCb3g+XG4gICAgPGRpdj5HYW1tYTwvZGl2PlxuICA8L0hCb3g+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZS0xJylcbilcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VkJveCBzdHlsZT17e2NvbG9yOiAnYmx1ZScsIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheSd9fT5cbiAgICA8ZGl2Pk9uZTwvZGl2PlxuICAgIDxIQm94IHN0eWxlPXt7Y29sb3I6ICdwdXJwbGUnLCBib3JkZXI6ICcycHggZG90dGVkIHJlZCd9fT5cbiAgICAgIDxkaXY+QXBwbGU8L2Rpdj5cbiAgICAgIDxkaXY+QmFuYW5hPC9kaXY+XG4gICAgICA8ZGl2PkNhdWxpZmxvd2VyPC9kaXY+XG4gICAgPC9IQm94PlxuICAgIDxkaXY+VHdvPC9kaXY+XG4gICAgPGRpdj5UaHJlZTwvZGl2PlxuICAgIDxIQm94IHN0eWxlPXt7Y29sb3I6ICdicm93bicsIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fT5cbiAgICAgIDxkaXY+Rm91cjwvZGl2PlxuICAgICAgPGRpdj5GaXZlPC9kaXY+XG4gICAgICA8VkJveD5cbiAgICAgICAgPGRpdj5BYXJkdmFyazwvZGl2PlxuICAgICAgICA8ZGl2PkJhYm9vbjwvZGl2PlxuICAgICAgICA8ZGl2PkNhbmFyeTwvZGl2PlxuICAgICAgPC9WQm94PlxuICAgICAgPGRpdj5TaXg8L2Rpdj5cbiAgICA8L0hCb3g+XG4gIDwvVkJveD4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlLTInKVxuKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBjbGFzcyBWQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiByZW5kZXJCb3goZmFsc2UsIHRoaXMucHJvcHMpXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gcmVuZGVyQm94KHRydWUsIHRoaXMucHJvcHMpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJCb3goaXNIb3Jpem9udGFsLCBwcm9wcykge1xuICBsZXQgY2xhc3NOYW1lID0gaXNIb3Jpem9udGFsID8gJ2hib3gnIDogJ3Zib3gnXG5cbiAgLy8gTWVyZ2Ugc3R5bGUuXG4gIGxldCBuZXdTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnN0eWxlKVxuICBPYmplY3QuYXNzaWduKG5ld1N0eWxlLCB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IGlzSG9yaXpvbnRhbCA/ICdyb3cnIDogJ2NvbHVtbid9KVxuXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtuZXdTdHlsZX0+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbn1cbiJdfQ==
