(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _helper = require('../lib/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = (function (_BaseComponent) {
  _inherits(HelloWorld, _BaseComponent);

  function HelloWorld(props) {
    _classCallCheck(this, HelloWorld);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).call(this, props));

    _this.state = { show: false };
    _this._bind('handleClick');
    return _this;
  }

  _createClass(HelloWorld, [{
    key: 'render',
    value: function render() {
      var bigGreeting = _react2.default.createElement(
        'div',
        { style: { fontSize: '5em', color: 'goldenrod' } },
        '你好世界！'
      );

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
          { onClick: this.handleClick },
          'Click me'
        ),
        this.state.show && bigGreeting
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ show: !this.state.show });
    }
  }]);

  return HelloWorld;
})(_helper.BaseComponent);

_reactDom2.default.render(_react2.default.createElement(HelloWorld, null), document.getElementById('example'));

},{"../lib/helper":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = exports.BaseComponent = (function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));
  }

  _createClass(BaseComponent, [{
    key: '_bind',
    value: function _bind() {
      var _this2 = this;

      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
        methods[_key] = arguments[_key];
      }

      methods.forEach(function (method) {
        _this2[method] = _this2[method].bind(_this2);
      });
    }
  }]);

  return BaseComponent;
})(_react2.default.Component);

},{"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2hlbGxvd29ybGQvYXBwLmJhYmVsIiwic2l0ZS9saWIvaGVscGVyLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tNLFVBQVU7WUFBVixVQUFVOztBQUNkLFdBREksVUFBVSxDQUNGLEtBQUssRUFBRTswQkFEZixVQUFVOzt1RUFBVixVQUFVLGFBRU4sS0FBSzs7QUFDWCxVQUFLLEtBQUssR0FBRyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQTtBQUMxQixVQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTs7R0FDMUI7O2VBTEcsVUFBVTs7NkJBT0w7QUFDUCxVQUFJLFdBQVcsR0FBRzs7VUFBSyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsQUFBQzs7T0FBWSxDQUFBOztBQUVoRixhQUFPOzs7UUFDTDs7WUFBTSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsQUFBQzs7U0FBYTs7UUFFN0Q7O1lBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFDLEFBQUM7O1NBQWE7O1FBQ3ZFLHlDQUFNO1FBQ047O1lBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEFBQUM7O1NBQWtCO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLFdBQVc7T0FDM0IsQ0FBQTtLQUNQOzs7a0NBRWE7QUFDWixVQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO0tBQ3hDOzs7U0F0QkcsVUFBVTtXQUhSLGFBQWE7O0FBNEJyQixtQkFBUyxNQUFNLENBQ2IsOEJBQUMsVUFBVSxPQUFHLEVBQ2QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDOUJZLGFBQWEsV0FBYixhQUFhO1lBQWIsYUFBYTs7V0FBYixhQUFhOzBCQUFiLGFBQWE7O2tFQUFiLGFBQWE7OztlQUFiLGFBQWE7OzRCQUNOOzs7d0NBQVQsT0FBTztBQUFQLGVBQU87OztBQUNkLGFBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDMUIsZUFBSyxNQUFNLENBQUMsR0FBRyxPQUFLLE1BQU0sQ0FBQyxDQUFDLElBQUksUUFBTSxDQUFBO09BQ3ZDLENBQUMsQ0FBQTtLQUNIOzs7U0FMVSxhQUFhO0dBQVMsZ0JBQU0sU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tICcuLi9saWIvaGVscGVyJ1xuXG5cbmNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge3Nob3c6IGZhbHNlfVxuICAgIHRoaXMuX2JpbmQoJ2hhbmRsZUNsaWNrJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmlnR3JlZXRpbmcgPSA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICc1ZW0nLCBjb2xvcjogJ2dvbGRlbnJvZCd9fT7kvaDlpb3kuJbnlYzvvIE8L2Rpdj5cblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogJ3JlZCcsIGZvbnRXZWlnaHQ6ICdib2xkJ319PkhlbGxvPC9zcGFuPlxuICAgICAgJm5ic3A7XG4gICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiAnYmx1ZScsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ319PldvcmxkPC9zcGFuPiFcbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DbGljayBtZTwvYnV0dG9uPlxuICAgICAge3RoaXMuc3RhdGUuc2hvdyAmJiBiaWdHcmVldGluZ31cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ICF0aGlzLnN0YXRlLnNob3d9KVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEhlbGxvV29ybGQgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIF9iaW5kKC4uLm1ldGhvZHMpIHtcbiAgICBtZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgdGhpc1ttZXRob2RdID0gdGhpc1ttZXRob2RdLmJpbmQodGhpcylcbiAgICB9KVxuICB9XG59XG4iXX0=
