(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = (function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).apply(this, arguments));
  }

  _createClass(HelloWorld, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { style: { color: 'red', fontWeight: 'bold' } },
          'Hello'
        ),
        ' ',
        _react2.default.createElement(
          'span',
          { style: { color: 'blue', textDecoration: 'underline' } },
          'World'
        ),
        '!',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          null,
          'Submit'
        )
      );
    }
  }]);

  return HelloWorld;
})(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(HelloWorld, null), document.getElementById('example'));

},{"react":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2hlbGxvd29ybGQvYXBwLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJTSxVQUFVO1lBQVYsVUFBVTs7V0FBVixVQUFVOzBCQUFWLFVBQVU7O2tFQUFWLFVBQVU7OztlQUFWLFVBQVU7OzZCQUNMO0FBQ1AsYUFBTzs7O1FBQ0w7O1lBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLEFBQUM7O1NBQWE7O1FBRTdEOztZQUFNLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBQyxBQUFDOztTQUFhOztRQUN2RSx5Q0FBTTtRQUNOOzs7O1NBQXVCO09BQ25CLENBQUE7S0FDUDs7O1NBVEcsVUFBVTtHQUFTLGdCQUFNLFNBQVM7O0FBWXhDLG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxVQUFVLE9BQUcsRUFDZCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cblxuY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6ICdyZWQnLCBmb250V2VpZ2h0OiAnYm9sZCd9fT5IZWxsbzwvc3Bhbj5cbiAgICAgICZuYnNwO1xuICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogJ2JsdWUnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fT5Xb3JsZDwvc3Bhbj4hXG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8SGVsbG9Xb3JsZCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKVxuIl19
