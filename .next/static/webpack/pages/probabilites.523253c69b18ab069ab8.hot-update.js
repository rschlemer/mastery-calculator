webpackHotUpdate_N_E("pages/probabilites",{

/***/ "./pages/probabilites.js":
/*!*******************************!*\
  !*** ./pages/probabilites.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Probabilities; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstat */ \"./node_modules/jstat/dist/jstat.js\");\n/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstat__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ras/Documents/git/mastery-calculator/pages/probabilites.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Probabilities = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Probabilities, _Component);\n\n  var _super = _createSuper(Probabilities);\n\n  function Probabilities(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Probabilities);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      probability: 0.1,\n      trials: 10,\n      amount: 1,\n      exact: 0,\n      atMost: 0,\n      atLeast: 0\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Probabilities, [{\n    key: \"runCalcs\",\n    value: function runCalcs() {\n      var exact = jstat__WEBPACK_IMPORTED_MODULE_7__[\"binomial\"].pdf(this.amount, this.trials, this.probability);\n      var atMost = jstat__WEBPACK_IMPORTED_MODULE_7__[\"binomial\"].cdf(this.amount, this.trials, this.probability);\n      var atLeast = 1 - jstat__WEBPACK_IMPORTED_MODULE_7__[\"binomial\"].cdf(this.amount - 1, this.trials, this.probability);\n      console.log(excat, atMost, atLeast);\n      this.setState({\n        exact: exact,\n        atMost: atMost,\n        atLeast: atLeast\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: this.state.probability,\n            onChange: function onChange(e) {\n              _this2.setState({\n                probability: e.target.value\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: this.state.trials,\n            onChange: function onChange(e) {\n              _this2.setState({\n                trials: e.target.value\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: this.state.amount,\n            onChange: function onChange(e) {\n              _this2.setState({\n                amount: e.target.value\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            onClick: function onClick() {\n              return _this2.runCalcs();\n            },\n            children: \"Calculate Probabilities\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [parseFloat(this.state.exact).toFixed(2) + \"%\", \" chance of getting exacltly \", this.amount, \" drops.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [parseFloat(this.state.atMost).toFixed(2) + \"%\", \" chance of getting at most \", this.amount, \" drops.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [parseFloat(this.state.atLeast).toFixed(2) + \"%\", \" chance of getting at least \", this.amount, \" drops.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Probabilities;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvYmFiaWxpdGVzLmpzPzkyNzMiXSwibmFtZXMiOlsiUHJvYmFiaWxpdGllcyIsInByb3BzIiwic3RhdGUiLCJwcm9iYWJpbGl0eSIsInRyaWFscyIsImFtb3VudCIsImV4YWN0IiwiYXRNb3N0IiwiYXRMZWFzdCIsImpTdGF0IiwicGRmIiwiY2RmIiwiY29uc29sZSIsImxvZyIsImV4Y2F0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJydW5DYWxjcyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7SUFHcUJBLGE7Ozs7O0FBQ2pCLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVcsRUFBRSxHQURKO0FBRVRDLFlBQU0sRUFBRSxFQUZDO0FBR1RDLFlBQU0sRUFBRSxDQUhDO0FBSVRDLFdBQUssRUFBRSxDQUpFO0FBS1RDLFlBQU0sRUFBRSxDQUxDO0FBTVRDLGFBQU8sRUFBRTtBQU5BLEtBQWI7QUFGZTtBQVVsQjs7OzsrQkFFVTtBQUNQLFVBQUlGLEtBQUssR0FBR0csOENBQUEsQ0FBZUMsR0FBZixDQUFtQixLQUFLTCxNQUF4QixFQUFnQyxLQUFLRCxNQUFyQyxFQUE2QyxLQUFLRCxXQUFsRCxDQUFaO0FBQ0EsVUFBSUksTUFBTSxHQUFHRSw4Q0FBQSxDQUFlRSxHQUFmLENBQW1CLEtBQUtOLE1BQXhCLEVBQWdDLEtBQUtELE1BQXJDLEVBQTZDLEtBQUtELFdBQWxELENBQWI7QUFDQSxVQUFJSyxPQUFPLEdBQUcsSUFBSUMsOENBQUEsQ0FBZUUsR0FBZixDQUFtQixLQUFLTixNQUFMLEdBQWMsQ0FBakMsRUFBb0MsS0FBS0QsTUFBekMsRUFBaUQsS0FBS0QsV0FBdEQsQ0FBbEI7QUFDQVMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosRUFBbUJQLE1BQW5CLEVBQTJCQyxPQUEzQjtBQUNBLFdBQUtPLFFBQUwsQ0FBYztBQUNWVCxhQUFLLEVBQUVBLEtBREc7QUFFVkMsY0FBTSxFQUFFQSxNQUZFO0FBR1ZDLGVBQU8sRUFBRUE7QUFIQyxPQUFkO0FBS0g7Ozs2QkFFUTtBQUFBOztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxrQ0FDSTtBQUFPLGlCQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXQyxXQUF6QjtBQUFzQyxvQkFBUSxFQUFFLGtCQUFDYSxDQUFELEVBQU87QUFBRSxvQkFBSSxDQUFDRCxRQUFMLENBQWM7QUFBRVosMkJBQVcsRUFBRWEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQXhCLGVBQWQ7QUFBZ0Q7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8saUJBQUssRUFBRSxLQUFLaEIsS0FBTCxDQUFXRSxNQUF6QjtBQUFpQyxvQkFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQU87QUFBRSxvQkFBSSxDQUFDRCxRQUFMLENBQWM7QUFBRVgsc0JBQU0sRUFBRVksQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQW5CLGVBQWQ7QUFBMkM7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQU8saUJBQUssRUFBRSxLQUFLaEIsS0FBTCxDQUFXRyxNQUF6QjtBQUFpQyxvQkFBUSxFQUFFLGtCQUFDVyxDQUFELEVBQU87QUFBRSxvQkFBSSxDQUFDRCxRQUFMLENBQWM7QUFBRVYsc0JBQU0sRUFBRVcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQW5CLGVBQWQ7QUFBMkM7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNDLFFBQUwsRUFBTjtBQUFBLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU9JO0FBQUEsa0NBQ0k7QUFBQSx1QkFBSUMsVUFBVSxDQUFDLEtBQUtsQixLQUFMLENBQVdJLEtBQVosQ0FBVixDQUE2QmUsT0FBN0IsQ0FBcUMsQ0FBckMsSUFBMEMsR0FBOUMsa0NBQStFLEtBQUtoQixNQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLHVCQUFJZSxVQUFVLENBQUMsS0FBS2xCLEtBQUwsQ0FBV0ssTUFBWixDQUFWLENBQThCYyxPQUE5QixDQUFzQyxDQUF0QyxJQUEyQyxHQUEvQyxpQ0FBK0UsS0FBS2hCLE1BQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsdUJBQUllLFVBQVUsQ0FBQyxLQUFLbEIsS0FBTCxDQUFXTSxPQUFaLENBQVYsQ0FBK0JhLE9BQS9CLENBQXVDLENBQXZDLElBQTRDLEdBQWhELGtDQUFpRixLQUFLaEIsTUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWVIOzs7O0VBekNzQ2lCLCtDIiwiZmlsZSI6Ii4vcGFnZXMvcHJvYmFiaWxpdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBqU3RhdCBmcm9tICdqc3RhdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvYmFiaWxpdGllcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvYmFiaWxpdHk6IDAuMSxcbiAgICAgICAgICAgIHRyaWFsczogMTAsXG4gICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICBleGFjdDogMCxcbiAgICAgICAgICAgIGF0TW9zdDogMCxcbiAgICAgICAgICAgIGF0TGVhc3Q6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJ1bkNhbGNzKCkge1xuICAgICAgICBsZXQgZXhhY3QgPSBqU3RhdC5iaW5vbWlhbC5wZGYodGhpcy5hbW91bnQsIHRoaXMudHJpYWxzLCB0aGlzLnByb2JhYmlsaXR5KTtcbiAgICAgICAgbGV0IGF0TW9zdCA9IGpTdGF0LmJpbm9taWFsLmNkZih0aGlzLmFtb3VudCwgdGhpcy50cmlhbHMsIHRoaXMucHJvYmFiaWxpdHkpO1xuICAgICAgICBsZXQgYXRMZWFzdCA9IDEgLSBqU3RhdC5iaW5vbWlhbC5jZGYodGhpcy5hbW91bnQgLSAxLCB0aGlzLnRyaWFscywgdGhpcy5wcm9iYWJpbGl0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4Y2F0LCBhdE1vc3QsIGF0TGVhc3QpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4YWN0OiBleGFjdCxcbiAgICAgICAgICAgIGF0TW9zdDogYXRNb3N0LFxuICAgICAgICAgICAgYXRMZWFzdDogYXRMZWFzdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9iYWJpbGl0eX0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBwcm9iYWJpbGl0eTogZS50YXJnZXQudmFsdWUgfSkgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRyaWFsc30gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyB0cmlhbHM6IGUudGFyZ2V0LnZhbHVlIH0pIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9IG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldFN0YXRlKHsgYW1vdW50OiBlLnRhcmdldC52YWx1ZSB9KSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gdGhpcy5ydW5DYWxjcygpfT5DYWxjdWxhdGUgUHJvYmFiaWxpdGllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwYXJzZUZsb2F0KHRoaXMuc3RhdGUuZXhhY3QpLnRvRml4ZWQoMikgKyBcIiVcIn0gY2hhbmNlIG9mIGdldHRpbmcgZXhhY2x0bHkge3RoaXMuYW1vdW50fSBkcm9wcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwYXJzZUZsb2F0KHRoaXMuc3RhdGUuYXRNb3N0KS50b0ZpeGVkKDIpICsgXCIlXCJ9IGNoYW5jZSBvZiBnZXR0aW5nIGF0IG1vc3Qge3RoaXMuYW1vdW50fSBkcm9wcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwYXJzZUZsb2F0KHRoaXMuc3RhdGUuYXRMZWFzdCkudG9GaXhlZCgyKSArIFwiJVwifSBjaGFuY2Ugb2YgZ2V0dGluZyBhdCBsZWFzdCB7dGhpcy5hbW91bnR9IGRyb3BzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/probabilites.js\n");

/***/ })

})