webpackJsonp([1],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),f=n(158),s=o(f),p=n(160),b=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={show:!1},n._bind("handleClick"),n}return u(t,e),l(t,[{key:"render",value:function(){var e=c["default"].createElement("div",{style:{fontSize:"5em",color:"goldenrod"}},"你好世界！");return c["default"].createElement("div",null,c["default"].createElement("span",{style:{backgroundColor:"lightsalmon",fontWeight:"bold"}},"Hello")," ",c["default"].createElement("span",{style:{backgroundColor:"palegreen",textDecoration:"underline"}},"World"),"!",c["default"].createElement("br",null),c["default"].createElement("button",{onClick:this.handleClick},"Click me"),this.state.show&&e)}},{key:"handleClick",value:function(){this.setState({show:!this.state.show})}}]),t}(p.BaseComponent);s["default"].render(c["default"].createElement(b,null),document.getElementById("example"))},160:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0;var i=n(1),c=o(i);t.BaseComponent=function(e){function t(){return r(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];n.forEach(function(t){e[t]=e[t].bind(e)})}}]),t}(c["default"].Component)}});