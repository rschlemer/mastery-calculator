webpackHotUpdate_N_E("pages/probabilites",{

/***/ "./pages/probabilites.js":
/*!*******************************!*\
  !*** ./pages/probabilites.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Probabilities; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstat */ \"./node_modules/jstat/dist/jstat.js\");\n/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstat__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ras/Documents/git/mastery-calculator/pages/probabilites.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Probabilities = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Probabilities, _Component);\n\n  var _super = _createSuper(Probabilities);\n\n  function Probabilities(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Probabilities);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      probability: 0.1,\n      trials: 10,\n      amount: 1,\n      exact: 0,\n      atMost: 0,\n      atLeast: 0\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Probabilities, [{\n    key: \"runCalcs\",\n    value: function runCalcs() {\n      var exact = jstat__WEBPACK_IMPORTED_MODULE_7__[\"binomial\"].pdf(this.amount, this.trials, this.probability);\n      var atMost = jstat__WEBPACK_IMPORTED_MODULE_7__[\"binomial\"].cdf(this.amount, this.trials, this.probability);\n      var atLeast = 1 - jstat__WEBPACK_IMPORTED_MODULE_7__[\"binomial\"].cdf(this.amount - 1, this.trials, this.probability);\n      console.log(exact, atMost, atLeast);\n      this.setState({\n        exact: exact,\n        atMost: atMost,\n        atLeast: atLeast\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: this.state.probability,\n            onChange: function onChange(e) {\n              _this2.setState({\n                probability: e.target.value\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: this.state.trials,\n            onChange: function onChange(e) {\n              _this2.setState({\n                trials: e.target.value\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            value: this.state.amount,\n            onChange: function onChange(e) {\n              _this2.setState({\n                amount: e.target.value\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            onClick: function onClick() {\n              return _this2.runCalcs();\n            },\n            children: \"Calculate Probabilities\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [parseFloat(this.state.exact).toFixed(2) + \"%\", \" chance of getting exacltly \", this.amount, \" drops.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [parseFloat(this.state.atMost).toFixed(2) + \"%\", \" chance of getting at most \", this.amount, \" drops.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [parseFloat(this.state.atLeast).toFixed(2) + \"%\", \" chance of getting at least \", this.amount, \" drops.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Probabilities;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvYmFiaWxpdGVzLmpzPzkyNzMiXSwibmFtZXMiOlsiUHJvYmFiaWxpdGllcyIsInByb3BzIiwic3RhdGUiLCJwcm9iYWJpbGl0eSIsInRyaWFscyIsImFtb3VudCIsImV4YWN0IiwiYXRNb3N0IiwiYXRMZWFzdCIsImpTdGF0IiwicGRmIiwiY2RmIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicnVuQ2FsY3MiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0lBR3FCQSxhOzs7OztBQUNqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGlCQUFXLEVBQUUsR0FESjtBQUVUQyxZQUFNLEVBQUUsRUFGQztBQUdUQyxZQUFNLEVBQUUsQ0FIQztBQUlUQyxXQUFLLEVBQUUsQ0FKRTtBQUtUQyxZQUFNLEVBQUUsQ0FMQztBQU1UQyxhQUFPLEVBQUU7QUFOQSxLQUFiO0FBRmU7QUFVbEI7Ozs7K0JBRVU7QUFDUCxVQUFJRixLQUFLLEdBQUdHLDhDQUFBLENBQWVDLEdBQWYsQ0FBbUIsS0FBS0wsTUFBeEIsRUFBZ0MsS0FBS0QsTUFBckMsRUFBNkMsS0FBS0QsV0FBbEQsQ0FBWjtBQUNBLFVBQUlJLE1BQU0sR0FBR0UsOENBQUEsQ0FBZUUsR0FBZixDQUFtQixLQUFLTixNQUF4QixFQUFnQyxLQUFLRCxNQUFyQyxFQUE2QyxLQUFLRCxXQUFsRCxDQUFiO0FBQ0EsVUFBSUssT0FBTyxHQUFHLElBQUlDLDhDQUFBLENBQWVFLEdBQWYsQ0FBbUIsS0FBS04sTUFBTCxHQUFjLENBQWpDLEVBQW9DLEtBQUtELE1BQXpDLEVBQWlELEtBQUtELFdBQXRELENBQWxCO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsT0FBM0I7QUFDQSxXQUFLTSxRQUFMLENBQWM7QUFDVlIsYUFBSyxFQUFFQSxLQURHO0FBRVZDLGNBQU0sRUFBRUEsTUFGRTtBQUdWQyxlQUFPLEVBQUVBO0FBSEMsT0FBZDtBQUtIOzs7NkJBRVE7QUFBQTs7QUFDTCwwQkFDSTtBQUFBLGdDQUNJO0FBQUEsa0NBQ0k7QUFBTyxpQkFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsV0FBekI7QUFBc0Msb0JBQVEsRUFBRSxrQkFBQ1ksQ0FBRCxFQUFPO0FBQUUsb0JBQUksQ0FBQ0QsUUFBTCxDQUFjO0FBQUVYLDJCQUFXLEVBQUVZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUF4QixlQUFkO0FBQWdEO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFPLGlCQUFLLEVBQUUsS0FBS2YsS0FBTCxDQUFXRSxNQUF6QjtBQUFpQyxvQkFBUSxFQUFFLGtCQUFDVyxDQUFELEVBQU87QUFBRSxvQkFBSSxDQUFDRCxRQUFMLENBQWM7QUFBRVYsc0JBQU0sRUFBRVcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQW5CLGVBQWQ7QUFBMkM7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQU8saUJBQUssRUFBRSxLQUFLZixLQUFMLENBQVdHLE1BQXpCO0FBQWlDLG9CQUFRLEVBQUUsa0JBQUNVLENBQUQsRUFBTztBQUFFLG9CQUFJLENBQUNELFFBQUwsQ0FBYztBQUFFVCxzQkFBTSxFQUFFVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFBbkIsZUFBZDtBQUEyQztBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ0MsUUFBTCxFQUFOO0FBQUEsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0k7QUFBQSxrQ0FDSTtBQUFBLHVCQUFJQyxVQUFVLENBQUMsS0FBS2pCLEtBQUwsQ0FBV0ksS0FBWixDQUFWLENBQTZCYyxPQUE3QixDQUFxQyxDQUFyQyxJQUEwQyxHQUE5QyxrQ0FBK0UsS0FBS2YsTUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSx1QkFBSWMsVUFBVSxDQUFDLEtBQUtqQixLQUFMLENBQVdLLE1BQVosQ0FBVixDQUE4QmEsT0FBOUIsQ0FBc0MsQ0FBdEMsSUFBMkMsR0FBL0MsaUNBQStFLEtBQUtmLE1BQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsdUJBQUljLFVBQVUsQ0FBQyxLQUFLakIsS0FBTCxDQUFXTSxPQUFaLENBQVYsQ0FBK0JZLE9BQS9CLENBQXVDLENBQXZDLElBQTRDLEdBQWhELGtDQUFpRixLQUFLZixNQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBZUg7Ozs7RUF6Q3NDZ0IsK0MiLCJmaWxlIjoiLi9wYWdlcy9wcm9iYWJpbGl0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAqIGFzIGpTdGF0IGZyb20gJ2pzdGF0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9iYWJpbGl0aWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9iYWJpbGl0eTogMC4xLFxuICAgICAgICAgICAgdHJpYWxzOiAxMCxcbiAgICAgICAgICAgIGFtb3VudDogMSxcbiAgICAgICAgICAgIGV4YWN0OiAwLFxuICAgICAgICAgICAgYXRNb3N0OiAwLFxuICAgICAgICAgICAgYXRMZWFzdDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcnVuQ2FsY3MoKSB7XG4gICAgICAgIGxldCBleGFjdCA9IGpTdGF0LmJpbm9taWFsLnBkZih0aGlzLmFtb3VudCwgdGhpcy50cmlhbHMsIHRoaXMucHJvYmFiaWxpdHkpO1xuICAgICAgICBsZXQgYXRNb3N0ID0galN0YXQuYmlub21pYWwuY2RmKHRoaXMuYW1vdW50LCB0aGlzLnRyaWFscywgdGhpcy5wcm9iYWJpbGl0eSk7XG4gICAgICAgIGxldCBhdExlYXN0ID0gMSAtIGpTdGF0LmJpbm9taWFsLmNkZih0aGlzLmFtb3VudCAtIDEsIHRoaXMudHJpYWxzLCB0aGlzLnByb2JhYmlsaXR5KTtcbiAgICAgICAgY29uc29sZS5sb2coZXhhY3QsIGF0TW9zdCwgYXRMZWFzdCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhhY3Q6IGV4YWN0LFxuICAgICAgICAgICAgYXRNb3N0OiBhdE1vc3QsXG4gICAgICAgICAgICBhdExlYXN0OiBhdExlYXN0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnByb2JhYmlsaXR5fSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHByb2JhYmlsaXR5OiBlLnRhcmdldC52YWx1ZSB9KSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudHJpYWxzfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHRyaWFsczogZS50YXJnZXQudmFsdWUgfSkgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnJ1bkNhbGNzKCl9PkNhbGN1bGF0ZSBQcm9iYWJpbGl0aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnNlRmxvYXQodGhpcy5zdGF0ZS5leGFjdCkudG9GaXhlZCgyKSArIFwiJVwifSBjaGFuY2Ugb2YgZ2V0dGluZyBleGFjbHRseSB7dGhpcy5hbW91bnR9IGRyb3BzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnNlRmxvYXQodGhpcy5zdGF0ZS5hdE1vc3QpLnRvRml4ZWQoMikgKyBcIiVcIn0gY2hhbmNlIG9mIGdldHRpbmcgYXQgbW9zdCB7dGhpcy5hbW91bnR9IGRyb3BzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnNlRmxvYXQodGhpcy5zdGF0ZS5hdExlYXN0KS50b0ZpeGVkKDIpICsgXCIlXCJ9IGNoYW5jZSBvZiBnZXR0aW5nIGF0IGxlYXN0IHt0aGlzLmFtb3VudH0gZHJvcHMuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/probabilites.js\n");

/***/ })

})